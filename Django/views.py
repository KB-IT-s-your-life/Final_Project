from email import contentmanager
from multiprocessing import context
from django.shortcuts import redirect, render
from . models import Facilities, Mamul
from django.http import JsonResponse
import joblib
import json
import numpy as np

# Create your views here.
def index(request):
    return render(request, 'index.html')

def base_index_test(request):
    return render(request, 'base_index_test.html')

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

def getlatlng(request):
    print('시작')
    bozeong = request.GET.get('bozeong')
    mamul = list(Mamul.objects.filter(bozeonggum__gt = bozeong).values())
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




# submit 눌렀을때 제출 되게 하는 함수
# def filter(request):

# #    medical = request.POST.get('medical_val') 
# #context={
# #        'medical': medical
# #    }
#     #return render(request, 'mamul.html', context)
