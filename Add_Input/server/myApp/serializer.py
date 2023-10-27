from .models import Table,Chart;
from rest_framework import serializers

class serializeTable(serializers.ModelSerializer):
    class Meta:
        model=Table
        fields="__all__"

class serializeChart(serializers.ModelSerializer):
    class Meta:
        model=Chart
        fields="__all__"