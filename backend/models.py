from django.db import models

# Create your models here.
class Film(models.Model):
    ime = models.CharField(max_length=250)
    originalIme = models.CharField(max_length=120)
    zanr = models.CharField(max_length=200)
    radnja = models.TextField(max_length=5000)
    imdbOcena = models.CharField(max_length=100)
    linkPreuzmi = models.CharField(max_length=1000)
    linkGledaj = models.CharField(max_length=1000)
    godina = models.CharField(max_length=10)

    def __str__(self):
        return self.ime
