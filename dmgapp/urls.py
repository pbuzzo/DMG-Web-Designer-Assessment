from django.urls import path
from dmgapp import views

urlpatterns = [
    path('', views.index, name='home')
]
