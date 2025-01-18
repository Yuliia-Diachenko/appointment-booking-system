MeetMate System
A comprehensive appointments booking system built with MERN stack.

Features
User Management: Create, edit, delete, and view users of different types (client, business).

Appointment Booking: Clients can view business users and book appointments with them.

Booking Management: Clients can view, edit, and cancel their bookings.

Technologies Used

Back End: Node.js, Express.js
Database: MongoDB

Setup
Clone the repository:

bash
git clone https://github.com/Yuliia-Diachenko/appointment-booking-system
cd appointment-booking-system
Install dependencies:

bash
npm install
Set up environment variables: Create a .env file in the root of your project and add the necessary environment variables.

Start the development server:

bash
npm run dev
API Endpoints
Users
GET /users/ - Get all users

GET /users/:userId - Get user by ID

POST /users/ - Create new user

DELETE /users/:userId - Delete user by ID

PUT /users/:userId - Upsert (create/update) user by ID

PATCH /users/:userId - Edit user by ID

Bookings
GET /bookings/ - Get all bookings

GET /bookings/:bookingId - Get booking by ID

POST /bookings/ - Create new booking

DELETE /bookings/:bookingId - Delete booking by ID

PUT /bookings/:bookingId - Upsert (create/update) booking by ID

PATCH /bookings/:bookingId - Edit booking by ID

Directory Structure
plaintext
.
├── controllers      # API endpoint functions
├── middlewares      # Custom express middlewares
├── models           # Mongoose models
├── routes           # Express routes
├── utils            # Utility functions
└── validation       # Request validation schemas
Deployment
Deploy on Heroku:

Set up the Heroku CLI and log in.

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. If you find a bug or have a feature request, please open an issue.

License
This project is licensed under the MIT License.
