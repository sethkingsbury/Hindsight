import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateRoom from './pages/CreateRoom';
import JoinRoom from './pages/JoinRoom';
import Room from './pages/Room';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Header />
					<Routes>
						<Route
							path='/'
							element={
								<ProtectedRoute>
									<Home />
								</ProtectedRoute>
							}
						/>
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route
							path='/createRoom'
							element={
								<ProtectedRoute>
									<CreateRoom />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/joinRoom'
							element={
								<ProtectedRoute>
									<JoinRoom />
								</ProtectedRoute>
							}
						/>
						<Route
							path='/room/:room'
							element={
								<ProtectedRoute>
									<Room />
								</ProtectedRoute>
							}
						/>
						<Route path='/*' element={<NotFound />} />
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
