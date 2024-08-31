const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Define a user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    phone: String,
    surname: String,
    mobile: String,
    email: { type: String, required: true, unique: true },
    givenname: String,
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/login', (req, res) => {
    res.render("login");
});

// Handle the login form submission
app.get('/profile', (req, res) => {
    res.send("Proile page");
});



app.get('/profile/:username', (req, res) => {
    const username = req.params.username;
    // Replace with your logic to fetch user data based on username
  
    const user = { // Replace with actual user data retrieval
      user_id: username,
      F_Name: "Ayush",
      L_Name: "Rawat",
      email: "dfghj@gmail.com",
      phone: "78965123",
      dept : "M.C. Delhi",
    //   projects : []
      projects : [{title: "P123" , description: "RANDOM P1", status: "buffer"}, {title: "P456" , description: "RANDOM P2", status: "working"}, {title: "P789" , description: "RANDOM P3", status: "completed"}] //Jitne bhi projects available hai for that city would be stored in this with project id.
    };
  
    res.render('user', user); // Render the user.ejs template with user data
  });

app.get('/projectRegister', (req, res) => {
    res.render('projectCreation');
});


// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});








































// const express = require('express');
// const mongoose = require('mongoose');
// const http = require('http');
// const path = require('path');
// const { Server } = require('socket.io');

// const app = express();
// const server = http.createServer(app);
// const io = new Server(server);

// mongoose.connect('mongodb://localhost:27017/userDB', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.error('Could not connect to MongoDB', err));

// // Define a user schema
// const userSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     phone: String,
//     surname: String,
//     mobile: String,
//     email: { type: String, required: true, unique: true },
//     givenname: String,
// });

// // Create a model from the schema
// const User = mongoose.model('User', userSchema);

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
// app.use(express.static(path.join(__dirname, 'public')));

// // Routes
// app.get('/', (req, res) => {
//     res.render("index");
// });

// app.get('/login', (req, res) => {
//     res.render("login");
// });

// // Handle the login form submission
// app.get('/profile', (req, res) => {
//     res.send("Proile page");
// });

// // Route to render the user's profile page
// app.get('/profile/:username', (req, res) => {
//     const username = req.params.username;
//     // Replace with your logic to fetch user data based on username
  
//     const user = { // Replace with actual user data retrieval
//       user_id: username,
//       F_Name: "Ayush",
//       L_Name: "Rawat",
//       email: "dfghj@gmail.com",
//       phone: "78965123"
//     };
  
//     res.render('user', user); 
// });

// app.get('/projectRegister', (req, res) => {
//     res.render('projectCreation');
// });

// // Socket.io setup
// io.on('connection', (socket) => {
//     console.log('A user connected:', socket.id);

//     socket.on('send-location', (data) => {
//         console.log(`Received location from ${socket.id}:`, data);
//         io.emit('receive-location', { id: socket.id, ...data });
//     });

//     socket.on('disconnect', () => {
//         console.log('User disconnected:', socket.id);
//         io.emit('user-disconnected', socket.id);
//     });
// });

// // Start the server
// server.listen(3000, () => {
//     console.log("Server is running on port 3000");
// });
