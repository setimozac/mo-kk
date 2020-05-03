from django.contrib import admin
from .models import MyUser
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.utils.translation import gettext as _


class UserAdmin(BaseUserAdmin):
    
    list_display = ('email', 'name')
    fieldsets = (
        (None, {'fields': ('email', 'passwor')}),
        (_('Personal info'), {'fields': ('name', )}),
        (_('Dates'), {'fields': ('last_login', )}),
        (_('Permissions'), {'fields': ('is_admin', )}),
    )

    add_fieldsets = (
        (None, {
            'classes': ('wide', ),
            'fields': ('email', 'password1', 'password2')
        }),
    )

    search_fields = ('email', )
    ordering = ('email',)
    filter_horizontal = ()

admin.site.register(MyUser, UserAdmin)
