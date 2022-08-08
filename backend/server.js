const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

//Connect to Database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });

app.get('/', (req, res) => {
	res.status(200).json({ message: 'Welcome to Hindsight API' });
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

io.on('connection', (socket) => {
	console.log(`Connected`);

	socket.on('disconnect', () => console.log(`Disconnected`));

	socket.on('join', (room, username) => {
		console.log(`${username} is joining ${room}`);
		socket.join(room);
		io.to(room).emit('joinMessage', 'A user has entered the room!');
	});

	socket.on('message', (data) => {
		const { message, room, username } = data;
		let res = `${username}: ${message} (${room})`;
		console.log(res);
		io.to(room).emit('message', message);
	});
});

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
