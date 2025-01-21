from django.db import models
# Model for storing user details
class User(models.Model):
    USER_TYPES = [
        ('Customer', 'Customer'),
        ('Admin', 'Admin'),
    ]

    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    password = models.CharField(max_length=100)
    phone = models.CharField(max_length=15, unique=True)
    user_type = models.CharField(max_length=10, choices=USER_TYPES, default='Customer')
