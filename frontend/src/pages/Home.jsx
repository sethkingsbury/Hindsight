import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
	const user = JSON.parse(localStorage.getItem('user'));

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			if (user.isAdmin) {
				navigate('/admin');
			}
		}
	}, [navigate, user]);

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
