from rest_framework.serializers import ModelSerializer
from .models import Rental

class RentalSerializer(ModelSerializer):
    class Meta:
        model = Rental
        fields = '__all__'