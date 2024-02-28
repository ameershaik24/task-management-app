from commons.models import BaseModel
from django.db import models


class Task(BaseModel):
    TODO = "todo"
    IN_PROGRESS = "in_progress"
    DONE = "done"
    TASK_STATUSES = [(TODO, "To DO"), (IN_PROGRESS,
                                       "In Progress"), (DONE, "Done")]

    title = models.CharField(max_length=100)
    description = models.TextField()

    status = models.CharField(max_length=20, choices=TASK_STATUSES)
