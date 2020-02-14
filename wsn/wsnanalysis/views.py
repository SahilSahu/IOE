from django.shortcuts import render
from django.conf import settings
# from wsnanalysis import views
from .models import *
from django.shortcuts import redirect
from django.contrib.auth import authenticate,login
from django.contrib.auth import views as auth_views
from django.views.generic import View
from django.http import HttpResponse
# Create your views here.

def index(request):
	context={'1':1}
	return render(request, 'wsnanalysis/index.html',context)

def dashboard(request):
	context={'1':1}
	return render(request, 'wsnanalysis/dashboard.html',context)

def chart(request):
	context={'1':1}
	return render(request, 'wsnanalysis/chart.html',context)

def map(request):
	context={'1':1}
	return render(request, 'wsnanalysis/map.html',context)