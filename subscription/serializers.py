from rest_framework.serializers import ModelSerializer
from .models import Membership, Subscription


class MembershipSerializer(ModelSerializer):
    class Meta:
        model = Membership
        fields = [
            "first_name",
            "last_name",
            "email",
        ]