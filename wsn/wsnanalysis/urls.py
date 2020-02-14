from django.conf.urls import url
from . import views
from django.contrib.auth import views as auth_views
app_name='wsnanalysis'
from .views import *

urlpatterns=[
	url(r'^$',views.index,name="index"),
	url(r'^dashboard/$',views.dashboard, name='dashboard'),
	url(r'^chart/$',views.chart, name='chart'),
	url(r'^map/$',views.map, name='map')
]
