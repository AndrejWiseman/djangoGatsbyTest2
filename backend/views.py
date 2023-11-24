from django.shortcuts import render
from .models import Film
from .serializers import FilmSerializer
from rest_framework import viewsets


# Create your views here.
def front(request):
    context = {

    }
    return render(request, "index.html", context)

def druga(request):
    context = {

    }
    return render(request, "druga/index.html", context)

def treca(request):
    context = {

    }
    return render(request, "treca/index.html", context)



class FilmViewSet(viewsets.ModelViewSet):
    serializer_class = FilmSerializer
    queryset = Film.objects.all()
