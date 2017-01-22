from django.conf.urls import url
from rest_framework import routers
from .views import *

urlpatterns = [
	url(r'^test/$', index, name="index"),
]

router = routers.DefaultRouter()
router.register(r'main', MainViewSet, 'main')
urlpatterns += router.urls