from django.urls import path
from . import views
# Routers


urlpatterns = [
    path('', views.rental_list),
    path('<int:pk>', views.rental_detail),
    path('create', views.rental_create),
    path('<int:pk>/delete/', views.rental_delete),
] 
