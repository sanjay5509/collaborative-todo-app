# Collaborative To-Do App

This is a simple collaborative to-do app built using **React** for frontend and **FastAPI** for backend.

## Features
- Create and manage tasks.
- Track tasks with status.
- View, add, update, and delete tasks.

## Setup Instructions

### Backend
1. Navigate to the `backend` directory.
2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Run the FastAPI server:
    ```bash
    uvicorn app.main:app --reload
    ```

### Frontend
1. Navigate to the `frontend` directory.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the React app:
    ```bash
    npm start
    ```

Now you can view the app at `http://localhost:3000` and interact with the backend API at `http://localhost:8000`.
