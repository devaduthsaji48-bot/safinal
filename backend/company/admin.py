from django.contrib import admin
from .models import Company

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("id", "company_name", "email", "company_code", "website", "created_time")
    search_fields = ("company_name", "email", "company_code")
