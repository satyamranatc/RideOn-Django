from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Rental
from .serializers import RentalSerializer

@api_view(['GET'])
def GetRentals(request):
    rentals = Rental.objects.all()
    serializer = RentalSerializer(rentals, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def GetRental(request, pk):
    try:
        rental = Rental.objects.get(pk=pk)
    except Rental.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RentalSerializer(rental)
    return Response(serializer.data)

@api_view(['POST'])
def CreateRental(request):
    serializer = RentalSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
def UpdateRental(request, pk):
    try:
        rental = Rental.objects.get(pk=pk)
    except Rental.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = RentalSerializer(rental, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def DeleteRental(request, pk):
    try:
        rental = Rental.objects.get(pk=pk)
        rental.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Rental.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
