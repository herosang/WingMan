from os.path import isfile, join
from os import listdir
import random

from django.shortcuts import render
from django.conf import settings
from django.contrib.staticfiles.templatetags.staticfiles import static

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

		directory = join(settings.BASE_DIR, 'Faces', 'backend', 'dataset', gender)
		files = [f for f in listdir(directory) if isfile(join(directory, f)) and f.endswith('jpg')]
		random_sample = [ files[i] for i in sorted(random.sample(range(len(files)), num_images)) ]

		return Response({'images': map(lambda filename: static(join('dataset', gender, filename)), random_sample)})
		
def index(request):
	return render(request, 'test.html')