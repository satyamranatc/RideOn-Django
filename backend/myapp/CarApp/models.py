from django.db import models

# Create your models here.
class Car(models.Model):
    brand = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    year = models.IntegerField()
    color = models.CharField(max_length=200)
    image = models.ImageField(upload_to='cars', blank=True)


