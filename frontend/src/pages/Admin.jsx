import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { createTeam, reset } from '../features/admin/adminSlice';

function Admin() {
	const [formData, setFormData] = useState({
		name: '',
	});

	const dispatch = useDispatch();

	const { isSuccess, isError, message } = useSelector((state) => state.admin);

	const { name } = formData;

	useEffect(() => {
		if (isError) {
			toast.error(message);
		}

		// Redirect when logged in
		if (isSuccess) {
			setFormData({ name: '' });
		}

		dispatch(reset());
	}, [isError, isSuccess, message, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const teamData = {
			name,
		};

		dispatch(createTeam(teamData));
	};

	return (
		<div>
			<h1>Admin</h1>

			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<input
						type='text'
						className='form-control'
						id='name'
						name='name'
						value={name}
						onChange={onChange}
						placeholder='Enter team name'
						required
					/>
				</div>
				<div className='form-group'>
					<button className='btn btn-block'>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default Admin;
