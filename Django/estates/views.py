from django.shortcuts import render
from . models import Facilities, Mamul, Jachibubjung
from django.http import JsonResponse
import joblib
import json
import numpy as np
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def land(request):
    return render(request, 'land.html')

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
    gu = request.GET.get('jachigu')
    facil = list(Jachibubjung.objects.filter(jachigu__contains=gu).values())

    context = {
        'facil':facil,      
    }
    return JsonResponse(context)

def getmamuls(request):
    pk = request.GET.get('pk')
    mamuls = Mamul.objects.get(pk=pk).__dict__
    del mamuls['_state']
    context = {
        'mamuls':mamuls,     
    }
    return JsonResponse(context)

@csrf_exempt
def getwallselatlng(request):
    jsonObject = json.loads(request.body)
    bozeong_min = jsonObject.get('bozeong_min')
    bozeong_max = jsonObject.get('bozeong_max')
    wallse_min = jsonObject.get('wallse_min')
    wallse_max = jsonObject.get('wallse_max')
    mamul = list(Mamul.objects.filter(bozeonggum__gte = bozeong_min, bozeonggum__lte = bozeong_max, imdaeru__gte=wallse_min, imdaeru__lte=wallse_max, junwallse='월세').values())

    context = {
        'mamul':mamul,
    }
    return JsonResponse(context)

@csrf_exempt
def getbozeonglatlng(request):
    jsonObject = json.loads(request.body)
    bozeong_min = jsonObject.get('bozeong_min')
    bozeong_max = jsonObject.get('bozeong_max')
    mamul = list(Mamul.objects.filter(bozeonggum__gte = bozeong_min, bozeonggum__lte = bozeong_max, junwallse='전세').values())

    context = {
        'mamul':mamul,      
    }
    return JsonResponse(context)

@csrf_exempt
def pca(request):
    pca_model = joblib.load('estates/pca_tool.pickle')
    jsonObject = json.loads(request.body)
    medical = jsonObject.get('medical')
    facility = jsonObject.get('facility')
    convenient = jsonObject.get('convenient')
    market = jsonObject.get('market')
    leisure = jsonObject.get('leisure')
    fastfood = jsonObject.get('fastfood')
    cafe = jsonObject.get('cafe')
    traffic = jsonObject.get('traffic')
    restaurant = jsonObject.get('restaurant')
    shopping = jsonObject.get('shopping')
    input_list = [medical,facility,convenient,leisure,traffic,restaurant,fastfood,cafe,market,shopping]
    input_array = np.array(input_list).reshape(1,-1)
    pca_result = pca_model.transform(input_array)
    print(pca_result)
    knn_model = joblib.load('estates/knn_clustering.pkl')
    pred = knn_model.predict(pca_result)
    pred = pred.tolist()
    
    context = {
        'pred' : pred
    }
    return JsonResponse(context)
