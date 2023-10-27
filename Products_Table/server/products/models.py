from django.db import models

# Create your models here.
class productsTable(models.Model):
    product_id=models.IntegerField()
    product_name=models.CharField(max_length=30)
    product_price=models.CharField(max_length=20)
    product_quantity=models.IntegerField()
    total=models.IntegerField(default=0)
    description=models.TextField(max_length=300)

    def __str__(self):
        return self.product_name
