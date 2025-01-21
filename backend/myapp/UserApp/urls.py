from django.urls import path
from . import views
# Routers


urlpatterns = [
    path('', views.user_list),
    path('<int:pk>', views.user_detail),
    path('create', views.user_create),
    path('<int:pk>/update/', views.user_update),
    path('<int:pk>/delete/', views.user_delete),
  
] 
