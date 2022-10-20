from django.shortcuts import render
from . models import Facilities, Mamul
from django.http import JsonResponse

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
    print('1')
    facil = Facilities.objects.all()
    print(facil)
    context = {
        'facil': facil
    }
    
    return JsonResponse(context)