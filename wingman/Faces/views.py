from os.path import isfile, join, basename
from os import listdir
import random
import subprocess
import sys

from django.shortcuts import render
from django.conf import settings
from django.contrib.staticfiles.templatetags.staticfiles import static
from django.core.cache import cache
from django.views.decorators.csrf import csrf_exempt

from rest_framework.response import Response
from rest_framework.decorators import detail_route, list_route
from rest_framework import viewsets


class ApiViewSet(viewsets.ViewSet):
                
	@list_route(methods=['get'])
	def initial(self, request):
		num_images = 10

		gender = request.GET.get('gender', 'both')

		if gender not in ('both, male, female'):
			return Response(status=400)

		cache.set('gender', gender)
		directory = join(settings.BASE_DIR, 'Faces', 'backend', 'dataset', gender)
		files = [f for f in listdir(directory) if isfile(join(directory, f)) and f.endswith('jpg')]
		random_sample = [ files[i] for i in sorted(random.sample(range(len(files)), num_images)) ]

		return Response({'images': map(lambda filename: static(join('dataset', gender, filename)), random_sample)})

	@csrf_exempt
	@list_route(methods=['post'])
	def train(self, request):
		image_file = request.POST.get('image_file')
		choice = request.POST.get('choice')

		if image_file is None or choice is None:
			return Response(status=400)

		gender = cache.get('gender')
		directory = join(settings.BASE_DIR, 'Faces', 'backend', 'dataset', gender)
		image_file = join(directory, basename(image_file))

		classifier_file = join(settings.BASE_DIR, 'Faces', 'backend', 'classifier.py')
		model_file = join(settings.BASE_DIR, 'Faces', 'backend', 'classifier.pkl')

		# Update the model
		bash_command = "{classfier_file} --dlibFacePredictor {dlib_face_predictor} --networkModel {network_model} update_model {model_file} {image_file} '{choice}'".format(
			classfier_file=classifier_file,
			dlib_face_predictor='/root/openface/models/dlib/shape_predictor_68_face_landmarks.dat',
			network_model='/root/openface/models/openface/nn4.small2.v1.t7',
			model_file=model_file,
			image_file=image_file,
			choice=choice
		)

		subprocess.Popen(bash_command.split(), stdout=subprocess.PIPE)

		# Get a new image
		files = [f for f in listdir(directory) if isfile(join(directory, f)) and f.endswith('jpg')]

		# Make it random for now
		random_sample = [ files[i] for i in sorted(random.sample(range(len(files)), 1)) ]

		return Response({'images': map(lambda filename: static(join('dataset', gender, filename)), random_sample)})


def index(request):
	return render(request, 'test.html')