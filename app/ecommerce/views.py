from django.shortcuts import render
    

def home(request):
    # this block of codes should be deleted
    data = {
        'data1': {'ab': 'll'}
    }
    # this code above, should be deleted
    return render(request, 'ecommerce/home.html', data)

def about(request):
    return render(request, 'ecommerce/about.html')
