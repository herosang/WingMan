from django.conf.urls import url
from rest_framework import routers
from django.views.decorators.csrf import csrf_exempt
from .views import *

urlpatterns = [
	url(r'^test/$', index, name="index"),
]

router = routers.DefaultRouter()
router.register(r'api', MainViewSet, 'api')
urlpatterns += router.urls