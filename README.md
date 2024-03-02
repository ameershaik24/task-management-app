# Task management app

This is a simple Task management web application.

## Frontend

- Written using `Angular 16`
- Features
  - User Sign Up
  - User Log In/Log Out
  - Tasks CRUD
  - Filter tasks by status

- Requirements
  - Angular CLI: 16.0.6
  - Node: 18.16.0

To run the frontend
```
# clone the repo and cd to the cloned repo

cd frontend/task-management
npm install
ng serve
```


## Backend

- Written using `Django 5.0` and `DRF`
- Features
  - Token Authentication and custom Object level permissions
  - User specific Tasks CRUD

- Requirements
  - Python 3.11

To run the backend
```
# clone the repo and cd to the cloned repo
# activate python virtual environment

cd backend
pip install -r requirements.txt

cd application
python manage.py migrate
python manage.py runserver
```


