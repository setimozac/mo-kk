from django.contrib.auth.forms import UserCreationForm
from django import forms
from django.contrib.auth import get_user_model


class UserCreateForm(UserCreationForm):

    class Meta:
        model = get_user_model()
        fields = ('email', 'password1', 'password2')