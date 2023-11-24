import graphene
from graphene_django import DjangoObjectType

from backend.models import Film


class FilmType(DjangoObjectType):
    class Meta:
        model = Film
        fields = '__all__'


class Query(graphene.ObjectType):

    all_films = graphene.List(FilmType)
    film_by_ime = graphene.Field(
        FilmType, ime=graphene.String(required=True))
    film_by_godina = graphene.Field(
        FilmType, godina=graphene.String(required=True))

    def resolve_all_films(root, info):
        return Film.objects.all()

    def resolve_film_by_name(root, info, ime):
        try:
            return Film.objects.get(ime=ime)
        except Film.DoesNotExist:
            return None

schema = graphene.Schema(query=Query)
