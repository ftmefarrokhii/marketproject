
from django.contrib import admin
from django.urls import path
from signup.views import signup_page
from login.views import login_page

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/',login_page),
    path('signup/', signup_page)
]
