from django.shortcuts import render
from . models import Facilities, Mamul, Jachibubjung
from django.http import JsonResponse
import joblib
import json
import numpy as np

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

def getwallselatlng(request):
    print('시작')
    jsonObject = json.loads(request.body)
    bozeong = jsonObject.get('bozeong')
    wallse = jsonObject.get('wallse')
    print('필터')
    mamul = list(Mamul.objects.filter(bozeonggum__lte = bozeong, imdaeru__lte=wallse).values())
    print(mamul[0])

    context = {
        'mamul':mamul,      
    }
    return JsonResponse(context)

def getbozeonglatlng(request):
    print('시작')
    jsonObject = json.loads(request.body)
    bozeong = jsonObject.get('bozeong')
    print('필터')
    mamul = list(Mamul.objects.filter(bozeonggum__lte = bozeong).values())
    print(mamul[0])

    context = {
        'mamul':mamul,      
    }
    return JsonResponse(context)

def pca(request):
    pca_model = joblib.load('/Users/ijung-yun/Final_Project-main/Django/models/pca_tool.pickle')
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
    knn_model = joblib.load('/Users/ijung-yun/Final_Project-main/Django/models/knn_clustering.pkl')
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
