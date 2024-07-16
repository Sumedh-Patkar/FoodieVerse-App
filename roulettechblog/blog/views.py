from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions
from .models import Post
from django.contrib.auth.models import User
from .serializers import UserSerializer, PostSerializer
from django.contrib.auth import authenticate, login, logout
import json

# Create your views here.
# 1. Signup View
class SignUpApiView(APIView):

    # When called by get method, will only display the sign up page
    # post method will be used to create the user
    def post(self, request, *args, **kwargs):
        serializer = UserSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 2. Login view
class LoginApiView(APIView):
    # When called by get method, will only display the Login page
    # post method will be used to authenticate and login
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username = username, password = password)
        if user:
            login(request, user)
            return Response(status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# Debug endpoint/view
class ViewUsersView(APIView):
    def get(self, request, *args, **kwargs):
        users = User.objects.all()
        usersData = UserSerializer(users, many=True)

        return Response(data = usersData.data, status = status.HTTP_200_OK)

# 3. Create Post View
class CreatePostApiView(APIView):
    # Only authenticated users can create a post
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        print("printing request data")
        print(request.data)
        print()
        serializer = PostSerializer(data=request.data, context={'tags' : request.data.get('tags')})
        if serializer.is_valid():
            serializer.save(author=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# 4. Posts Feed View
class PostFeedApiView(APIView):
    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        postsData = PostSerializer(posts, many=True)

        return Response(data = postsData.data, status = status.HTTP_200_OK)

# # 5. Single Post View (DetailView)
class PostDetailApiView(APIView):
    def get_object(self, post_id):
        """
        Helper method that is used for viewing, updating, and deletion
        """
        try:
            return Post.objects.get(id = post_id)
        except Post.DoesNotExist:
            return None

    # Retrieve
    def get(self, request, post_id, *args, **kwargs):
        """
        Retrieves the Post with the given post_id
        """
        post_instance = self.get_object(post_id)

        if not post_instance:
            return Response(
                {"error": "Post with the given post_id does not exist"},
                status = status.HTTP_400_BAD_REQUEST
            )
        
        serializer = PostSerializer(post_instance)
        return Response(serializer.data, status = status.HTTP_200_OK)

    # Update    
    def put(self, request, post_id, *args, **kwargs):
        """
        Updates the post with the given details
        """
        post_instance = self.get_object(post_id)

        if not post_instance:
            return Response(
                {"error": "Post with the given post_id does not exist"},
                status = status.HTTP_400_BAD_REQUEST
            )

        data = {
            'title': request.data.get('title'),
            'subtitle': request.data.get('subtitle'),
            'content': request.data.get('content'), 
        }

        serializer = PostSerializer(
            instance = post_instance,
            data = data,
            context = {'tags' : request.data.get('tags')},
            partial = True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Delete
    def delete(self, request, post_id, *args, **kwargs):
        """
        Deletes the post item with the given post_id if it exists
        """
        post_instance = self.get_object(post_id)
        if not post_instance:
            return Response(
                {"error": "Post with the given post_id does not exist"},
                status = status.HTTP_400_BAD_REQUEST
            )
        post_instance.delete()
        return Response(
            {"res": "Object deleted!"}, 
            status=status.HTTP_200_OK
        )
