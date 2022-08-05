import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
	initiateSocket,
	subscribeToChat,
	disconnectSocket,
} from '../middleware/socketMiddleware';

function Room() {
	const room = useParams().room;
	const [message, setMessage] = useState('');
	const [chat, setChat] = useState([]);

	const params = useParams();
	const navigate = useNavigate();

	const onLeave = () => {
		navigate('/');
	};

	useEffect(() => {
		if (room) initiateSocket(room);

		subscribeToChat((err, data) => {
			if (err) return;
			setChat((oldChats) => [data, ...oldChats]);
		});

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
				<button>Send</button>
				{chat.map((m, i) => (
					<p key={i}>{m}</p>
				))}
			</div>
		</>
	);
}

export default Room;
