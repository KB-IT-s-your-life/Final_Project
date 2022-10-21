from django.shortcuts import render
from . models import Facilities, Mamul
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def mamul(request):
    return render(request, 'mamul.html')

def index_taeho(request):
    return render(request, 'index_taeho.html')

def barchart(request):
    return render(request, 'barchart.html')

def piechart(request):
    return render(request, 'piechart.html')

def index_copy(request):
    return render(request, 'index_copy.html')
  
def getfacilities(request):
    title = request.GET.get('title')
    facil = Facilities.objects.get(title=title).__dict__
    del facil['_state']

    context = {
        'facil':facil,      
    }
    return JsonResponse(context)

def getmamuls(request):
    print('hi')
    pk = request.GET.get('pk')
    print(pk)
    mamuls = Mamul.objects.get(pk=pk).__dict__
    del mamuls['_state']
    print(mamuls)
    context = {
        'mamuls':mamuls,     
    }
    return JsonResponse(context)