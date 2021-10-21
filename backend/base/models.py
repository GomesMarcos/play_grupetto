from django.contrib.auth.admin import User
from django.db import models

# Create your models here.

class User(models.Model):
    id = models.UUIDField(primary_key=True, verbose_name='user_id')
    name = models.CharField(max_length=255, null=False, blank=False)
    nickname = models.CharField(max_length=25, null=False, blank=False)
    email = models.EmailField()
    