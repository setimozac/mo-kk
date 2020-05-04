from django.shortcuts import render, redirect
from .forms import UserCreateForm
from django.contrib import messages

def register(request):
    if request.method == "POST":
        form = UserCreateForm(request.POST)
        if form.is_valid():
            # form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'account has been created for {username}')
            return redirect('home')
    else:
        form = UserCreateForm()
    return render(request, 'users/register.html', {'form': form})