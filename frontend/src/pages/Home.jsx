import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import avatar from '../';

function Home() {
	return (
		<div className='home-container'>
			<div className='profile-section'>
				<div className='profile-info'>
					<div className='profile-avatar'>Avatar</div>
					Profile
				</div>
				<div className='game-options'>
					<Link to='/joinRoom' className='btn'>
						<FaArrowRight /> Join a Retro
					</Link>
				</div>
			</div>
			<div className='profile-section'>badges</div>
		</div>
	);
}

export default Home;
