import { useNavigate } from 'react-router-dom';

function requreAuth() {
	const { user } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	if (!user) {
		navigate('/login');
	}

	return <div></div>;
}

export default requreAuth;
