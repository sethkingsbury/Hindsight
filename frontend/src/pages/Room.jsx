import { useParams, useNavigate } from 'react-router-dom';

function Room() {
	const params = useParams();
	const navigate = useNavigate();

	const onLeave = () => {
		navigate('/');
	};

	return (
		<>
			<section className='room-header'>
				<div>Room: {params.name}</div>
				<button className='btn btn-danger' onClick={onLeave}>
					{' '}
					Leave Room
				</button>
			</section>
		</>
	);
}

export default Room;
