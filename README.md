# Task Manager Application

A full-stack task management application with a sleek, high-contrast black and white UI, interactive animations, and comprehensive task management features.

## Features

- **User Authentication**: Secure login and registration system
- **Task Management**: Create, read, update, and delete tasks
- **Task Organization**: Mark tasks as completed, filter tasks by status
- **Search Functionality**: Find tasks quickly with the search feature
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **High Contrast Theme**: Elegant black and white interface with interactive elements
- **Dark/Light Mode Toggle**: Switch between dark and light modes

## Technology Stack

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT Authentication
- RESTful API architecture

### Frontend
- React.js
- React Router for navigation
- Context API for state management
- CSS animations and transitions
- Responsive design with media queries

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd Task-Manager
   ```

2. Install server dependencies
   ```
   npm install
   ```

3. Install frontend dependencies
   ```
   cd frontend
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=5001
   ```

5. Start the development server
   ```
   # From the root directory
   npm run dev
   
   # Start frontend (in a new terminal)
   cd frontend
   npm start
   ```

6. Open [http://localhost:3000](http://localhost:3000) to view the application

## Project Structure

```
Task-Manager/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Express middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # API routes
│   └── server.js        # Entry point
├── frontend/
│   ├── public/          # Static files
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── context/     # React context
│   │   ├── pages/       # Page components
│   │   ├── styles/      # CSS styles
│   │   └── App.js       # Main component
│   └── package.json     # Frontend dependencies
├── .env                 # Environment variables
├── package.json         # Backend dependencies
└── README.md            # Project documentation
```

## API Endpoints

| Method | Endpoint             | Description               | Auth Required |
|--------|----------------------|---------------------------|---------------|
| POST   | /api/users/register  | Register a new user       | No            |
| POST   | /api/users/login     | Login a user              | No            |
| GET    | /api/tasks           | Get all tasks             | Yes           |
| POST   | /api/tasks           | Create a new task         | Yes           |
| PUT    | /api/tasks/:id       | Update a task             | Yes           |
| DELETE | /api/tasks/:id       | Delete a task             | Yes           |

## License

This project is licensed under the MIT License.

## Acknowledgements

- Modern UI design inspired by GitHub's high contrast theme
- Interactive animations enhance user experience
- Responsive design principles for all device types

Dependencies

	•	Express: A fast and minimalist web framework for Node.js to handle routing and middleware.
	•	Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a straightforward way to define models, schemas, and perform database operations.
	•	Cors: A middleware to enable Cross-Origin Resource Sharing (CORS), allowing your frontend (React app) to interact with the backend hosted on a different domain or port.
	•	Dotenv: A zero-dependency module to load environment variables from a .env file. This allows you to store sensitive data like API keys or database URIs securely.
	•	Bcryptjs: A library to hash passwords securely, which is essential for user authentication.
	•	Jsonwebtoken: A compact, URL-safe means of representing claims to be transferred between two parties. It's used to generate and verify 