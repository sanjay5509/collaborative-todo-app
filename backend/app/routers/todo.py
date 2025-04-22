from fastapi import APIRouter
from backend.app.models import Task
from backend.app.schemas import TaskSchema

router = APIRouter()

tasks = []

@router.post("/tasks")
def create_task(task: TaskSchema):
    new_task = Task(title=task.title, description=task.description, status=task.status)
    tasks.append(new_task)
    return {"message": "Task created successfully", "task": new_task}

@router.get("/tasks")
def get_tasks():
    return tasks

@router.put("/tasks/{task_id}")
def update_task(task_id: int, task: TaskSchema):
    if task_id < len(tasks):
        tasks[task_id] = Task(title=task.title, description=task.description, status=task.status)
        return {"message": "Task updated successfully", "task": tasks[task_id]}
    return {"message": "Task not found"}

@router.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    if task_id < len(tasks):
        del tasks[task_id]
        return {"message": "Task deleted successfully"}
    return {"message": "Task not found"}
