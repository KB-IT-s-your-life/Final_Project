from django.urls import path
from . import views

app_name = 'estates'

urlpatterns = [
    # http://127.0.0.1:8000 => ''
    path('', views.index, name='index'),
    path('mamul', views.mamul, name='mamul'),
    path('index_taeho', views.index_taeho, name='index_taeho'),
    path('getfacilities', views.getfacilities, name='getfacilities'),
    path('getmamuls', views.getmamuls, name='getmamuls'),
    path('piechart', views.piechart, name='piechart'),
    path('barchart', views.barchart, name='barchart'),
]
