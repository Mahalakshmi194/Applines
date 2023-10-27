from django.db import models

# Create your models here.
class Table(models.Model):
    serial_no=models.IntegerField()
    first_name=models.CharField(max_length=30)
    last_name=models.CharField(max_length=30)
    email=models.EmailField()
    course=models.CharField(max_length=20)

    def __str__(self):
        return self.first_name

class Chart(models.Model):
    labels=models.CharField(max_length=30)
    values=models.IntegerField()

    def __str__(self):
        return self.labels