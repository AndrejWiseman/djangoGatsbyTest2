
from django.contrib import admin
from django.urls import path, include
from backend.views import front

urlpatterns = [
    path('admin/', admin.site.urls),

    path('backend/', include('backend.urls')),

    path("", front, name="front"),

]
