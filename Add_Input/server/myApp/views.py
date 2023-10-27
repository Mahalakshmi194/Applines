from django.shortcuts import render
from .models import Table,Chart
from .serializer import serializeTable,serializeChart
from rest_framework.response import Response
from rest_framework.views import APIView
from django.db.models import Q
# Create your views here.

class SetMethods(APIView):
    def get(self,request):
        obj=Table.objects.all()
        serializer=serializeTable(obj,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer=serializeTable(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)


class OperationsPerformed(APIView):
    def get(self,request,id):
        obj=Table.objects.get(id=id)
        serialize=serializeTable(obj)
        return Response(serialize.data)
    
    def put(self,request,id):
        obj=Table.objects.get(id=id)
        serialize=serializeTable(obj,data=request.data)
        if serialize.is_valid():
            serialize.save()
        return Response(serialize.data)
    
    def delete(self,request,id):
        obj=Table.objects.get(id=id)
        obj.delete()
        return Response(True)
    
class FilterData(APIView):
    def get(self,request):
        obj=Table.objects.all()
        query=request.GET.get('query')
        if query is not None:
            data=obj.filter(Q(first_name__icontains=query) | Q(course__icontains=query))
            return Response(data.values())
        return Response()
        

        
class setChartMethods(APIView):
    def get(self,id):
        obj=Chart.objects.all()
        serialize=serializeChart(obj,many=True)
        return Response(serialize.data)
    
    def post(self,request,id):
        serializer=serializeChart(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)