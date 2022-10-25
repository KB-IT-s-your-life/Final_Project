from django.urls import path
from . import views

app_name = 'estates'

urlpatterns = [
    # http://127.0.0.1:8000 => ''
    path('', views.index, name='index'),
    path('mamul', views.mamul, name='mamul'),
    path('makebtn', views.makebtn, name='makebtn'),
    path('getfacilities', views.getfacilities, name='getfacilities'),
    path('getmamuls', views.getmamuls, name='getmamuls'),
    path('getlatlng', views.getlatlng, name='getlatlng'),
    path('getdong', views.getdong, name='getdong'),
    path('getdong_xy', views.getdong_xy, name='getdong_xy'),
    path('getmain_xy', views.getmain_xy, name='getmain_xy'),

    
]
