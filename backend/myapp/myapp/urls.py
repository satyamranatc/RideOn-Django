from django.contrib import admin
from django.urls import path,include
# Media Import
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/Car/', include('CarApp.urls')),
    path('api/Users/', include('UserApp.urls')),
    path('admin/', admin.site.urls),
] 
# Media URL Configuration
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)