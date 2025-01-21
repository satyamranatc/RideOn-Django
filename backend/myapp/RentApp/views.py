from django.shortcuts import render
from django.http import HttpResponseNotFound

from.models import Rental
from .serializers import RentalSerializer

# Create your views here.

def rental_list(request):
    rentals = Rental.objects.all()
    serializer = RentalSerializer(rentals, many=True)
    return rentals

def rental_detail(request, pk):
    try:
        rental = Rental.objects.get(pk=pk)
    except Rental.DoesNotExist:
        return HttpResponseNotFound("Rental not found")
    serializer = RentalSerializer(rental)
    return rental

def rental_create(request):
    pass


def rental_delete(request, pk):
    pass


