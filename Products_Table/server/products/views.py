from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import productsTable
from .serializer import serializeProducts
# Create your views here.
class ProductsData(APIView):
    def get(self,request):
        obj=productsTable.objects.all()
        serialize=serializeProducts(obj,many=True)
        return Response(serialize.data)
    
    def post(self,request):
        obj=productsTable.objects.all()
        serialize=serializeProducts(data=request.data)
        if serialize.is_valid():
            serialize.save()
        return Response(serialize.data)
    
class OperationsOnProducts(APIView):
    def get(self,request,id):
        obj=productsTable.objects.get(id=id)
        serialize=serializeProducts(obj)
        return Response(serialize.data)
    
    def put(self,request,id):
        obj=productsTable.objects.get(id=id)
        serialze=serializeProducts(obj,data=request.data)
        if serialze.is_valid():
            serialze.save()
        return Response(serialze.data)
    
    def delete(self,request,id):
        obj=productsTable.objects.get(id=id)
        obj.delete()
        return Response("field deleted successfully")
    
    def patch(self,request,id):
        obj=productsTable.objects.get(id=id)
        serialize=serializeProducts(obj,data=request.data,partial=True)
        if serialize.is_valid():
            serialize.save()
        return Response(serialize.data)
    
class FilterData(APIView):
    def get(self,request):
        obj=productsTable.objects.all()
        query=request.GET.get("product_name")
        if query is not None:
            data=obj.filter(product_name__icontains=query)
            return Response(data.values())
        
class FilterRangesValues(APIView):
    def get(self,request,s):
        if s=="0-100":
            data=productsTable.objects.filter(product_price__range=[0,100])
        elif(s=="100-200"):
            data=productsTable.objects.filter(product_price__range=[100,200])
        elif(s=="200-300"):
            data=productsTable.objects.filter(product_price__range=[200,300])
        elif(s=="300-400"):
            data=productsTable.objects.filter(product_price__range=[300,400])
        elif(s=="400+"):
            data=productsTable.objects.filter(product_price__gte=400)
        else:
            return Response("data not found")
        serializer=serializeProducts(data,many=True)
        return Response(serializer.data)