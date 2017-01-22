
from django.shortcuts import render
from rest_framework.decorators import list_route
from django.http import HttpResponse
from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import detail_route, list_route
from rest_framework import viewsets
# Create your views here.

class MainViewSet(viewsets.ViewSet):
                
	@list_route(methods=['get'])
	def initial(self, request):
		gender = request.GET.gender
		num_images = 10
		directory = settings.BASE_DIR + '/backend/dataset/'

		if(gender == 'male'):
			directory += 'male'
			
		if(gender == 'female'):
			directory += 'female'
			
		if(gender == 'both'):
			directory += 'both'
		

		files = [f for f in listdir(directory) if isfile(join(directory, f))]
		random_sample = [ files[i] for i in sorted(random.sample(xrange(len(files)), num_images)) ]

		response = Response(random_sample,content_type="application/json")
		return response

def index(request):
	return render(request, 'test.html')