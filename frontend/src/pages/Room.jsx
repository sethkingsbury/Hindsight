import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	initiateSocket,
	subscribeToChat,
	disconnectSocket,
	sendMessage,
	receiveMessage,
} from '../middleware/socketMiddleware';

function Room() {
	const room = useParams().room;
	const [message, setMessage] = useState('');
	const [chat, setChat] = useState([]);

	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const onLeave = () => {
		navigate('/');
	};

	const submitMessage = () => {
		sendMessage(message, room, user.name);
	};

	useEffect(() => {
		if (room) initiateSocket(room, user.name);

		receiveMessage();

		return () => {
			disconnectSocket();
		};
	}, [room]);

	return (
		<>
			<section className='room-header'>
				<div>Room: {room}</div>
				<button className='btn btn-danger' onClick={onLeave}>
					{' '}
					Leave Room
				</button>
			</section>

			<div>
				<h1>Live Chat:</h1>
				<input
					type='text'
					name='name'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button onClick={submitMessage}>Send</button>
				{chat.map((m, i) => (
					<p key={i}>{m}</p>
				))}
			</div>
		</>
	);
}

export default Room;
