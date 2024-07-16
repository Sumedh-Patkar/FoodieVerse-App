
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Tag, Post

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'first_name', 'last_name', 'email', 'password']
        extra_kwargs = {
            'username': {"required":True, "allow_null":False, "allow_blank":False},
            'first_name': {"required":True, "allow_null":False, "allow_blank":False},
            'last_name': {"required":True, "allow_null":False, "allow_blank":False},
            'email': {"required":True, "allow_null":False, "allow_blank":False},
            'password': {"required":True, "allow_null":False, "allow_blank":False}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User.objects.create(**validated_data)
        user.set_password(password)
        user.save(update_fields=["password"])
        return user

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['name']

class PostSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)  #To ensure post ID is read only
    author = serializers.SlugRelatedField(
        read_only=True,
        slug_field="username"
    )
    tags = serializers.SlugRelatedField(read_only=True, many=True, slug_field="name")

    class Meta:
        model = Post
        fields = ['id', 'title', 'subtitle', 'author', 'content', 'tags', 'publish_date']
        extra_kwargs = {
            'id': {"required":True, "allow_null":False, "allow_blank":False},
            'title': {"required":True, "allow_null":False, "allow_blank":False},
            'author': {"required":True, "allow_null":False, "allow_blank":False},
            'content': {"required":True, "allow_null":False, "allow_blank":False},
            'tags': {"required":True, "allow_null":False, "allow_blank":False},
            'publish_date': {"required":True, "allow_null":False}
        }

    # Custom handling to create tags dynamically if they do not exist
    def create(self, validated_data):
        print("Got Tags?")
        tags_data = self.context.get('tags')  # Extract tags data from request context

        # Create a new Post instance
        new_post = Post.objects.create(**validated_data)
        new_post.save()

        # Create Tag instances if they don't exist
        for tag_name in tags_data:
            tag, _ = Tag.objects.get_or_create(name=tag_name)  # Use 'name' as the unique identifier
            # Assign tags to the new post
            new_post.tags.add(tag)

        return new_post
