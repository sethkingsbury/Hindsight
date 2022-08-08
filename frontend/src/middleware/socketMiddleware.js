import io from 'socket.io-client';

let socket;

export const initiateSocket = (room, username) => {
	socket = io('http://localhost:5000');
	if (socket && room) {
		console.log(`Connecting socket...`);
		socket.emit('join', room, username);
	}
};

export const disconnectSocket = () => {
	if (socket) {
		console.log('Disconnecting socket...');
		socket.disconnect();
	}
};

export const sendMessage = (message, room, username) => {
	if (socket) {
		socket.emit('message', { message, room, username });
	}
};

export const receiveMessage = (message) => {
	console.log(message);
};
