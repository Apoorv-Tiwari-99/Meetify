# Meetify - Video Conferencing Web Application

## Overview
This is a full-stack video conferencing web application built using the MERN stack. The application allows users to register and log in using token-based authentication. Users can create or join meetings using a unique meeting code. The platform supports real-time audio and video streaming, screen sharing, real-time messaging, and a meeting history feature. 

## Features
- **User Authentication & Authorization**
  - Token-based authentication using `bcrypt` for password hashing
  - Token generation using `crypto`
  - Secure login and registration

- **Meeting Functionality**
  - Create a new meeting or join an existing meeting via a unique code
  - Real-time audio and video communication using **WebRTC** (peer-to-peer architecture)
  - Enable/disable audio and video
  - Screen sharing functionality
  - End call and return to home page

- **Real-time Messaging**
  - Implemented using **Socket.IO** for event-based communication
  - Users can send and receive messages during meetings

- **Meeting History**
  - Users can view their previous meetings along with date and meeting codes

- **User Logout**
  - Secure logout functionality to invalidate user sessions

## Tech Stack
### Backend:
- Node.js
- Express.js
- MongoDB (for database)
- Socket.IO (for real-time communication)
- WebRTC (for video and audio streaming)
- Crypto (for token generation)
- Bcrypt (for password hashing and comparison)

### Frontend:
- React.js
- Material UI
- Socket.IO-client
- Vanilla CSS

### Deployment:
- Hosted on **Render.com** for easy accessibility

## Usage
1. Register or log in to your account.
2. Create a new meeting or enter a meeting code to join an existing meeting.
3. Use audio/video controls and screen sharing as needed.
4. Communicate via real-time messaging during the meeting.
5. View meeting history after sessions.
6. Logout when done.

## Contributing
Contributions are welcome! Feel free to fork this repository and submit pull requests.

## License
This project is licensed under the [MIT License](LICENSE).



