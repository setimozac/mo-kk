from django.urls import path
from . import views
from django.conf import settings
# from django.contrib.staticfiles import views
# from django.urls import re_path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('register/', views.register, name='register')
]

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()