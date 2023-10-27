from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('api/',ProductsData.as_view()),
    path('api/<int:id>',OperationsOnProducts.as_view()),
    path('api/filter',FilterData.as_view()),
    path('api/filterRange/<str:s>/',FilterRangesValues.as_view())
]
