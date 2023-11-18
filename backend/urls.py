from backend.views import FilmViewSet
from rest_framework.routers import DefaultRouter
from backend import views

router = DefaultRouter()
router.register(r'filmovi', views.FilmViewSet, basename='film')
urlpatterns = router.urls
