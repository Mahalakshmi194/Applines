from rest_framework import serializers
from .models import productsTable

class serializeProducts(serializers.ModelSerializer):
    class Meta:
        model=productsTable
        fields="__all__"
        # read_only_fields=("total")
