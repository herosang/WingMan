from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register(r'api', ApiViewSet, 'api')
urlpatterns = router.urls
