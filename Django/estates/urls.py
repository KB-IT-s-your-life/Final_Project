from django.urls import path
from . import views

app_name = 'estates'

urlpatterns = [
    # http://127.0.0.1:8000 => ''
    path('', views.land, name='land'),
    path('index', views.index, name='index'),
    path('mamul', views.mamul, name='mamul'),
    path('getfacilities', views.getfacilities, name='getfacilities'),
    path('getmamuls', views.getmamuls, name='getmamuls'),
    path('getdong', views.getdong, name='getdong'),
    path('pca', views.pca, name='pca'),
    path('getwallselatlng', views.getwallselatlng, name='getwallselatlng'),
    path('getbozeonglatlng', views.getbozeonglatlng, name='getbozeonglatlng'),
]
