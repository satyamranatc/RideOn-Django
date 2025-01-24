from django.urls import path
from . import views
# Routers


urlpatterns = [
    path('', views.user_list_all),
    path('<int:pk>', views.user_list),
    path('create/', views.user_create),
    path('<int:pk>/update/', views.user_update),
    path('<int:pk>/delete/', views.user_delete),
    # Login Section:
    path('login/', views.user_login),
  
] 
