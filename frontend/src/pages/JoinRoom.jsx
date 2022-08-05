import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateRoom() {
	const navigate = useNavigate();

	let teams = [{ value: 'Team 1' }, { value: 'Team 2' }, { value: 'Team 3' }];

	const [team, setTeam] = useState('');

	const onChange = (e) => {
		setTeam(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		navigate(`/room/${team}`);
	};

	return (
		<>
			<section className='heading'>
				<h1>Create a Retro Room</h1>
			</section>

			<section className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<select value={team} onChange={onChange} required>
							<option value='' disabled hidden>
								Choose a team
							</option>
							{teams.map((team) => (
								<option key={team.value} value={team.value}>
									{team.value}
								</option>
							))}
						</select>
					</div>
					<div className='form-group'>
						<button className='btn btn-block'>Start Session</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default CreateRoom;
