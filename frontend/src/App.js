import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
