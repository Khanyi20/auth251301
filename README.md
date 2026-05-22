# auth251301

<h2>Creative Chess Authentication System(MERN Stack) </h2>

<h2>Description</h2>
<p>A creative MERN Stack authentication system that combines the old fashioned password authentication with a chess-piece pattern verification system. Purpose of the system is to provide a 2 step verfication process, the traditinal password and a creative chess-piece pattern verification to ensure quality security.

Users register using:
- Email
- Password
- Custom chess-piece pattern

During login, users must:
- Enter correct email and password
- Recreate their saved chess-piece pattern</p>

<h2>Authentication process</h2>
<p>
Users will enter there details as normal when registering and then they will see a bunch of chess pieces. User must choose 4 random chess piece in a specific order and press register. when they login they have to remember the order of their chosen chess piece in order to correctly verify the user.
</p>

<h2>Design style</h2>
<p>
Colour Palette:
#773344
#E3B5A4
#F5E9E2
#0B0014
#D44D5C

Installations:
    Backend:
        mkdir backend
        npm init -y
        npm install express mongoose cors dotenv bcrypt
        npm install nodemon --save-dev
    Run server:
        npx nodemon server.js (*Must give results to show that database connection is successful)
    Under package.json file: "scripts": {
                                "start": "node server.js",
                                "dev": "nodemon server.js",
                                }
        npm run dev (start the backend)
    
    Frontend:
    cmd
    npx create-react-app app-name
    npm install axios
    npm install @dnd-kit/core
    npm start
</p>