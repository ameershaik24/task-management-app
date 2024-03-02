from commons.models import BaseModel
from django.contrib.auth.models import User
from django.db import models


class Task(BaseModel):
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    DONE = "done"
    TASK_STATUSES = [(TODO, "To Do"), (IN_PROGRESS,
                                       "In Progress"), (DONE, "Done")]

    title = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)

    status = models.CharField(max_length=20, choices=TASK_STATUSES)

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="tasks")
