from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('api/',SetMethods.as_view()),
    path('api/<int:id>',OperationsPerformed.as_view()),
    path('api/filter/',FilterData.as_view()),
    path('charts/',setChartMethods.as_view())
]
