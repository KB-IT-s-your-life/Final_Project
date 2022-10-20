from django.shortcuts import render
from . models import Facilities, Mamul, Test
from django.http import JsonResponse
from django.core import serializers

# Create your views here.
def index(request):
    return render(request, 'index.html')

def mamul(request):
    mamuls = Mamul.objects.all() # objects API
    
    context = {
        'mamuls': mamuls
    }
    return render(request, 'mamul.html', context)

def index_taeho(request):
    return render(request, 'index_taeho.html')

def getfacilities(request):
    print('진입')
    title = request.GET.get('title')
    print(title)
    
    facil = Facilities.objects.get(title=title).__dict__
    del facil['_state']
    print(facil)
    

    context = {
        'facil':facil,      
    }
    return JsonResponse(context)