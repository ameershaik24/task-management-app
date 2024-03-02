from django.contrib.auth.models import User
from django.db import models
from django.db.models import signals
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


@receiver(signal=signals.post_save, sender=User)
def create_token_on_user_creation(sender, **kwargs):
    if not kwargs.get("created", False):
        # nothing to do, if the User object wasn't just created
        return

    token = Token.objects.create(user=kwargs.get("instance"))
