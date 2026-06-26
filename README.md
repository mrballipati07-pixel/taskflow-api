TaskFlow Lite Backend API

A simple Task Management REST API built using Node.js and Express.js.

Features

- Create a task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task

Technologies Used

- Node.js
- Express.js
- JavaScript
- CORS
- Helmet
- Morgan
- Dotenv

Project Structure

taskflow-api/
│── src/
│   ├── controllers/
│   ├── routes/
│   ├── data/
│── server.js
│── package.json
│── .env

Installation

1. Clone the repository.

2. Install dependencies:

npm install

3. Start the development server:

npm run dev

4. Open your browser:

http://localhost:5000

API Endpoints

Method| Endpoint| Description
GET| /api/tasks| Get all tasks
GET| /api/tasks/:id| Get a task by ID
POST| /api/tasks| Create a new task
PUT| /api/tasks/:id| Update a task
DELETE| /api/tasks/:id| Delete a task

Author

PRAVEEN KUMAR BALLIPATI