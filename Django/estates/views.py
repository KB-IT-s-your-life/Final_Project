from django.shortcuts import render
from . models import Facilities, Mamul, Jachibubjung
from django.http import JsonResponse

# Create your views here.
def index(request):
    return render(request, 'index.html')

def mamul(request):
    return render(request, 'mamul.html')

def makebtn(request):
    return render(request, 'makebtn.html')

def getfacilities(request):
    title = request.GET.get('title')
    facil = Facilities.objects.get(title=title).__dict__
    del facil['_state']

    context = {
        'facil':facil,      
    }
    return JsonResponse(context)

def getdong(request):
    print('시작')
    gu = request.GET.get('jachigu')
    print(gu)
    facil = list(Jachibubjung.objects.filter(jachigu__contains=gu).values())
    print(facil)

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

def getlatlng(request):
    print('시작')
    bozeong = request.GET.get('bozeong')
    mamul = list(Mamul.objects.filter(bozeonggum__gt = bozeong).values())
    print(mamul[0])

    context = {
        'mamul':mamul,      
    }
    return JsonResponse(context)
    