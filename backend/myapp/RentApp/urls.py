from django.urls import path
from . import views

urlpatterns = [
    path('', views.GetRentals),  # List all rentals
    path('<int:pk>/', views.GetRental),  # Get a single rental by ID
    path('create/', views.CreateRental),  # Create a new rental
    path('<int:pk>/update/', views.UpdateRental),  # Update a rental by ID
    path('<int:pk>/delete/', views.DeleteRental),  # Delete a rental by ID
]
