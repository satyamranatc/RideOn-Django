from django.urls import path
from . import views
# Routers


urlpatterns = [
    path('', views.GetCars),
    path('<int:pk>', views.GetCar),
    path('create', views.CreateCar),
    path('<int:pk>/update/', views.UpdateCar),
    path('<int:pk>/delete/', views.DeleteCar),
] 
