from rest_framework import serializers

from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(read_only=True)
    status_display = serializers.SerializerMethodField()

    def get_status_display(self, obj):
        return obj.get_status_display()

    class Meta:
        model = Task
        fields = "__all__"
