import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function Home() {
	const user = {
		name: 'Seth',
		team: '100',
	};

	return (
		<>
			<div className='profile-section'>
				<div className='profile-info'>
					<h1>{user.name}</h1>
					<p>Team : {user.team}</p>
				</div>
				<div className='game-options'>
					<Link to='/joinRoom' className='btn btn-med'>
						<FaArrowRight /> Join a Retro
					</Link>
				</div>
			</div>
			<div className='profile-section'>
				<h1>Badges</h1>
				<p>Participate in a retrospective to earn badges!</p>
			</div>
		</>
	);
}

export default Home;
