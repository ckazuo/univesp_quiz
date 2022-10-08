from django import views
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

app_name = "quiz"
urlpatterns = [
    path("", views.homepage, name="homepage"),
    path("ranking", views.ranking, name="ranking"),
    path("questionario", views.questionario, name="questionario"),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)