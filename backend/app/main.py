from fastapi import FastAPI
from backend.app.routers import todo

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Collaborative To-Do App!"}

app.include_router(todo.router)

