from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.contrib.auth.models import AbstractUser
from cloudinary.models import CloudinaryField


class UserManager(BaseUserManager):
    """
    Creates and saves a User with the given email and password.
    """
    def create_user(
        self,
        first_name=None,
        last_name=None,
        email=None,
        password=None,
    ):
        user = self.model(
            first_name=first_name,
            last_name=last_name,
            email=self.normalize_email(email),
            password=password,
        )
        user.set_password(password)
        user.save(using=self._db)
        user.is_staff = False
        user.save(using=self._db)
        return user

    def create_superuser(self, first_name, last_name, email, birth_date, country, learning, password=None):
        """
        Creates and saves a superuser with the given email and password.
        """
        user = self.create_user(
            first_name=first_name,
            last_name=last_name,
            birth_date=birth_date,
            email=email,
            password=password,
            country=country,
            learning=learning,

        )

        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class UserAccount(AbstractUser):
    avatar = CloudinaryField(
        "avatar",
        folder="profile_pics",
        null=True,
        blank=True,
    )
    email = models.EmailField(null=True, unique=True)
    username = None
    birth_date = models.DateField(unique=True, null=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    country = models.CharField(max_length=100, null=True)
    learning = models.CharField(max_length=100, null=True)
    tutor_sessions = models.CharField(max_length=100, null=True, blank=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["birth_date", "first_name", "last_name", "country", "learning"]

    objects = UserManager()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    def age(self):
        today = date.today()
        return (
            today.year -
            self.birth_date.year -
            (
                (today.month, today.day) <
                (self.birth_date.month, self.birth_date.day)
            )
        )
