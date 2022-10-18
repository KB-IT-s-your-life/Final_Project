from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def mamul(request):
    return render(request, 'mamul.html')