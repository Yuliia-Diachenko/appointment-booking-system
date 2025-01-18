# Meet Mate System

## Description

This project is a backend for a comprehensive appointments booking system built with MERN stack.


1. **Clone the repository:**

```sh git clone https://github.com/Yuliia-Diachenko/appointment-booking-system/ ```

2. **Install dependencies:**

```sh npm install ```

## Usage

### Development

 1. **Start the local development server:**

 ```sh npm run dev ```

 2. **Start the MongoDB server:**

 Ensure the MongoDB server is running and the connection is configured in `src/config.js`.

 
### Production

1. **Start in production mode:**

```sh npm start ```

## The database created in Mongodb has the following endpoints:

 - For Users collection
 - 
       - GET: /users                        - to receive all users                      s
       - GET: /users/:userId                - to receive user by ID
       - POST: /users                       - create new user
       - DELETE: /users/:userId             - to delete user by id
       - PUT: /users/:userId                - to upsert user by id
       - PATCH: /users/:userId              - to update user by id

 - For Bookings collection
 - 
       - GET: /bookings                     - to receive all bookings
       - GET: /bookings/:bookingId          - to receive bookings by id
       - POST: /bookings                    - to add a new Termal power plant
       - DELETE: /bookings/:bookingId       - to delete bookings by id
       - PUT: /bookings/:bookingId          - to upsert bookings by id
       - PATCH: /bookings/:bookingId        - to update bookings by id
  

# We welcome contributions to the project! Please create pull requests and open issues for discussion.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details. ---

## Contact
 - **Author:** Yuliia Diachenko
 - **Email:**  y.diachenko@meta.ua
 - **GitHub:** https://github.com/Yuliia-Diachenko

# Features
  User Management: Create, edit, delete, and view users of different types (client, business).

  Appointment Booking: Clients can view business users and book appointments with them.

  Booking Management: Clients can view, edit, and cancel their bookings.

# Technologies Used

  - Back End: Node.js, Express.js
  - Database: MongoDB

# Directory Structure

- controllers     - # API endpoint functions
- middlewares     - # Custom express middlewares
- models          - # Mongoose models
- routes          - # Express routes
- utils           - # Utility functions
- validation      - # Request validation schemas


## Contributing
  Contributions are welcome! Please fork the repository and create a pull request with your changes. If you   find a bug or have a feature request, please open an issue.


