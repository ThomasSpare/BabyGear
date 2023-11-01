from rest_framework.serializers import ModelSerializer
from .models import Membership, Subscription


class MembershipSerializer(ModelSerializer):
    class Meta:
        model = Membership
        fields = [
            "name",
            "parent",
            "to_be_parent"
            "can_make_posts",
        ]