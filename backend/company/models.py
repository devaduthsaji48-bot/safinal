from django.db import models
from django.core.validators import MinLengthValidator, URLValidator, EmailValidator

class Company(models.Model):
    #Id: implicit primary key (autoincrement)
    company_name = models.CharField(
        max_length=100,
        validators=[MinLengthValidator(5)],  # at least 5 chars
        blank=False
    )
    email = models.EmailField(
        validators=[EmailValidator()],
        blank=False
    )
    company_code = models.CharField(
        max_length=20,
        unique=True,
        blank=True,
        null=True
    )  # unique, not mandatory
    website = models.URLField(
        max_length=200,
        validators=[URLValidator()],
        blank=True,
        null=True
    )  # optional valid URL
    created_time = models.DateTimeField(auto_now_add=True)  # set at create

    def __str__(self):
        return self.company_name
