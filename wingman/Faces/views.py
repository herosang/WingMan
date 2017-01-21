from django.shortcuts import render
from rest_framework.decorators import list_route
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.decorators import detail_route, list_route
from rest_framework import viewsets
from . import templates
# Create your views here.

class MainViewSet(viewsets.ViewSet):

	@detail_route(methods=['get'])
	def firstImage(self, request, pk=None):
                image_data = open("/path/to/my/image.png", "rb").read()
                response = Response(image_data,content_type="image/png")
                return response

	@list_route(methods=['post'])
	def postLikeResponse(self, request):
		return Response()

def index(request):
	return render(request, 'test.html')
