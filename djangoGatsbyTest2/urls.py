
from django.contrib import admin
from django.urls import path, include
from backend.views import front
from backend.views import druga
from backend.views import treca

urlpatterns = [
    path('admin/', admin.site.urls),

    path('backend/', include('backend.urls')),

    path("", front, name="front"),
    path("druga/", druga, name="druga"),
    path("treca/", treca, name="treca"),

]
