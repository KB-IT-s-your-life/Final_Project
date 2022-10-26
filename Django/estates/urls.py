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
    path('getdong_xy', views.getdong_xy, name='getdong_xy'),
    path('getmain_xy', views.getmain_xy, name='getmain_xy'),
    path('getclusterdong', views.getclusterdong, name='getclusterdong'),
    path('getjunwallselatlng', views.getjunwallselatlng, name='getjunwallselatlng'),
    path('getallindexlatlng', views.getallindexlatlng, name='getallindexlatlng'),
    
]
