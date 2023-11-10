import os
import re
from datetime import timedelta
from pathlib import Path

import dj_database_url
import django_heroku

if os.path.exists('env.py'):
    import env

CLOUDINARY_STORAGE = {
    'CLOUDINARY_URL': os.environ.get('CLOUDINARY_URL')
}

BASE_URL = [
        "https://8000-thomasspare-babygear-q6ncmhqqapz.ws-eu105.gitpod.io",
]

MEDIA_URL = '/media/'
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

REST_FRAMEWORK = {
    "EXCEPTION_HANDLER": "authentication.exceptions.status_code_handler",
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.TokenAuthentication",
    ],
}

REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10
}

PASSWORD = os.environ.get("PASSWORD")

DEBUG = True

ALLOWED_HOSTS = [
    "localhost:8000",
    "baby-gear-3dce8aa6c614.herokuapp.com",
    "8000-thomasspare-babygear-h6nwfuvyzh7.ws-eu105.gitpod.io",
    "8000-thomasspare-babygear-q6ncmhqqapz.ws-eu105.gitpod.io",
    "https://8000-thomasspare-babygear-q6ncmhqqapz.ws-eu106.gitpod.io",
    "8000-thomasspare-codecoach-9114q8n9hts.ws-eu105.gitpod.io",
]

CSRF_TRUSTED_ORIGINS = [
                    "https://8000-thomasspare-babygear-q6ncmhqqapz.ws-eu106.gitpod.io"
                    ]

if 'CLIENT_ORIGIN' in os.environ:
    CORS_ALLOWED_ORIGINS = [
        os.environ.get('CLIENT_ORIGIN')
    ]
    CORS_ORIGIN_WHITELIST = [
        os.environ.get('CLIENT_ORIGIN'),
    ]
if 'CLIENT_ORIGIN_DEV' in os.environ:
    extracted_url = re.match(r'^.+-', os.environ.get('CLIENT_ORIGIN_DEV', ''), re.IGNORECASE).group(0)
    CORS_ALLOWED_ORIGIN_REGEXES = [
        rf"{extracted_url}(eu|us)\d+\w\.gitpod\.io$",
    ]

CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_ALL_HEADERS = True

# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.sites",
    "cloudinary_storage",
    "cloudinary",
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    "profiles",
    "reviews",
    "subscription",
    "rest_framework",
    "corsheaders",
    "rest_framework.authtoken",
    "django_filters",
    "dj_rest_auth",
    "dj_rest_auth.registration",
    "chatapp",
]

SITE_ID = 1

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


ROOT_URLCONF = 'chatrooms.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        "DIRS": [os.path.join(BASE_DIR, 'staticfiles', 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'chatrooms.wsgi.application'
ASGI_APPLICATION = 'chatrooms.asgi.application'

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend'
]

# set username field to email
AUTH_USER_MODEL_USERNAME_FIELD = "email"


STATICFILES_STORAGE = (
    "cloudinary_storage.storage.StaticHashedCloudinaryStorage"
)
DEFAULT_FILE_STORAGE = "cloudinary_storage.storage.MediaCloudinaryStorage"

BASE_URL = os.environ.get("BASE_URL")

DATABASES = {'default': dj_database_url.parse(os.environ.get("DATABASE_URL"))}

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
WHITENOISE_ROOT = BASE_DIR / 'staticfiles' / 'build'
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


AUTH_USER_MODEL = "profiles.UserAccount"

django_heroku.settings(locals())
