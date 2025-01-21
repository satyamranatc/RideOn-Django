from django.db import models
from CarApp.models import Car
from UserApp.models import User

# Create your models here.
class Rental(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='rentals')  # Links rental to a user
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='rentals')   # Links rental to a car
    rental_date = models.DateTimeField(auto_now_add=True)  # Automatically records when the rental started
    return_date = models.DateTimeField(null=True, blank=True)  # Stores when the car was returned
    total_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)  # Total cost for the rental
