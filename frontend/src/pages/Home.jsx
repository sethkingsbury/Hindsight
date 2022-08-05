import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowRight, FaRegWindowMaximize } from 'react-icons/fa';

function Home() {
	const navigate = useNavigate();

	return (
		<>
			<section className='heading'>
				<h1>Welcome</h1>
				<p>Choose an option below to get started!</p>
			</section>

			<Link to='/createRoom' className='btn btn-reverse btn-block'>
				<FaRegWindowMaximize /> Create a Retro
			</Link>

			<Link to='/joinRoom' className='btn btn-block'>
				<FaArrowRight /> Join a Retro
			</Link>
		</>
	);
}

export default Home;
