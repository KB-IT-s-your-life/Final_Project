from django.shortcuts import render
from . models import Facilities, Mamul, Jachibubjung
from django.http import JsonResponse
import joblib
import json
import numpy as np
from django.views.decorators.csrf import csrf_exempt

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

def getwallselatlng(request):
    jsonObject = json.loads(request.body)
    bozeong = jsonObject.get('bozeong')
    wallse = jsonObject.get('wallse')
    mamul = list(Mamul.objects.filter(bozeonggum__lte = bozeong, imdaeru__lte=wallse).values())

    context = {
        'mamul':mamul,      
    }
    return JsonResponse(context)

@csrf_exempt
def getbozeonglatlng(request):
    jsonObject = json.loads(request.body)
    bozeong = jsonObject.get('bozeong')
    mamul = list(Mamul.objects.filter(bozeonggum__lte = bozeong).values())

    context = {
        'mamul':mamul,      
    }
    return JsonResponse(context)

@csrf_exempt
def pca(request):
    pca_model = joblib.load('estates/pca_tool.pickle')
    jsonObject = json.loads(request.body)
    medical = jsonObject.get('medical')
    security = jsonObject.get('security')
    shopping = jsonObject.get('shopping')
    market = jsonObject.get('market')
    leisure = jsonObject.get('leisure')
    convenient = jsonObject.get('convenient')
    oil = jsonObject.get('oil')
    traffic = jsonObject.get('traffic')
    restaurant = jsonObject.get('restaurant')
    park = jsonObject.get('park')
    # input_data = request.GET.get('input_data')
    input_list = [medical,security, shopping, market, leisure, convenient, oil, traffic, restaurant, park]
    input_array = np.array(input_list).reshape(1,-1)
    pca_result = pca_model.transform(input_array)
    # print(pca_result)
    knn_model = joblib.load('estates/knn_clustering.pkl')
    pred = knn_model.predict(pca_result)
    pred = pred.tolist()
    # print(type(pred))
    
    context = {
        # 'medical' : medical,
        # 'security' : security
        # 'input_list' : input_list,
        # 'pca_result' : pca_result
        'pred' : pred
    }
    return JsonResponse(context)
