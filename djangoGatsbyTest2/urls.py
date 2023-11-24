
from django.contrib import admin

from django.template.defaulttags import url

from django.urls import path, include

from django.views.decorators.csrf import csrf_exempt
# from graphql import graphql

from backend.views import front
from backend.views import druga
from backend.views import treca

from backend.views import java_script

import graphene
from graphene_django.views import GraphQLView
from djangoGatsbyTest2.schema import schema



urlpatterns = [
    path('admin/', admin.site.urls),

    path('backend/', include('backend.urls')),

    path("", front, name="front"),
    path("druga/", druga, name="druga"),
    path("treca/", treca, name="treca"),

    path('graphql', csrf_exempt(GraphQLView.as_view(graphiql=True, schema=schema))),


    url(r'.*\.js$', java_script),

]

