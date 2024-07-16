from django.urls import path
from .views import (
    SignUpApiView,
    LoginApiView,
    CreatePostApiView,
    PostFeedApiView,
    PostDetailApiView
)
from .views import ViewUsersView

urlpatterns = [
    path('signup/', SignUpApiView.as_view()),
    path('login/', LoginApiView.as_view()),
    path('post/create/', CreatePostApiView.as_view()),
    path('feed/', PostFeedApiView.as_view()),
    path('post/<int:post_id>/', PostDetailApiView.as_view()),
    path('viewusers/', ViewUsersView.as_view())
]