from django.shortcuts import render
from . models import Facilities, Mamul, Jachibubjung, Jachibubjung_xy, cluster_class
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

def getclusterdong(request):
    print('클러스터 시작')
    cluster_num = request.GET.get('cluster_num')
    cluster = list(cluster_class.objects.filter(cluster_num=cluster_num).values())
    print(cluster[0])
    context = {
        'cluster':cluster,      
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


def getmain_xy(request):
    print('시작')
    dong = request.GET.get('dong')
    print(dong)
    mainxy = Jachibubjung_xy.objects.get(bubjung=dong).__dict__
    del mainxy['_state']
    print(mainxy)

    context = {
        'mainxy':mainxy,      
    }
    return JsonResponse(context)

def getdong_xy(request):
    print('시작')
    dong = request.GET.get('dong')
    print(dong)
    mainxy = Jachibubjung_xy.objects.get(bubjung=dong).__dict__
    del mainxy['_state']
    print(mainxy)

    context = {
        'mainxy':mainxy,      
    }
    return JsonResponse(context)

@csrf_exempt
def getwallselatlng(request):
    print('월세시작')
    jsonObject = json.loads(request.body)
    bozeong_min = jsonObject.get('bozeong_min')
    bozeong_max = jsonObject.get('bozeong_max')
    wallse_min = jsonObject.get('wallse_min')
    wallse_max = jsonObject.get('wallse_max')
    one_dong = jsonObject.get('one_dong')
    mamul = list(Mamul.objects.filter(bozeonggum__gte = bozeong_min, bozeonggum__lte = bozeong_max, imdaeru__gte=wallse_min, imdaeru__lte=wallse_max, junwallse='월세', bubjung=one_dong).values())
    print('월세 끝')
    print(mamul[0])
    context = {
        'mamul':mamul,
    }
    return JsonResponse(context)

@csrf_exempt
def getbozeonglatlng(request):
    jsonObject = json.loads(request.body)
    bozeong_min = jsonObject.get('bozeong_min')
    bozeong_max = jsonObject.get('bozeong_max')
    one_dong = jsonObject.get('one_dong')
    mamul = list(Mamul.objects.filter(bozeonggum__gte = bozeong_min, bozeonggum__lte = bozeong_max, junwallse='전세', bubjung=one_dong).values())

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
