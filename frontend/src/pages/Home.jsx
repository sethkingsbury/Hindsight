import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegWindowMaximize } from 'react-icons/fa';

function Home() {
	return (
		<>
			<section className='heading'>
				<h1>Welcome</h1>
				<p>Choose an option below to get started!</p>
			</section>

			<Link to='/createRetro' className='btn btn-reverse btn-block'>
				<FaRegWindowMaximize /> Create a Retro
			</Link>

			<Link to='/joinRetro' className='btn btn-block'>
				<FaArrowRight /> Join a Retro
			</Link>
		</>
	);
}

export default Home;
