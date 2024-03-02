from commons.serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework import generics, permissions


class CreateUserView(generics.CreateAPIView):
    model = User
    permission_classes = [permissions.AllowAny]  # Or anon users can't register
    serializer_class = UserSerializer
