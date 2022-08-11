import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import Header from './components/Header';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import JoinRoom from './pages/JoinRoom';
import Room from './pages/Room';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Router>
				<div className='container'>
					<Header />
					<div className='page-content'>
						<Routes>
							<Route
								path='/'
								element={
									<ProtectedRoute>
										<Home />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/admin'
								element={
									<ProtectedRoute>
										<AdminRoute>
											<Admin />
										</AdminRoute>
									</ProtectedRoute>
								}
							/>
							<Route path='/login' element={<Login />} />
							<Route path='/register' element={<Register />} />
							<Route
								path='/joinRoom'
								element={
									<ProtectedRoute>
										<JoinRoom />
									</ProtectedRoute>
								}
							/>
							<Route
								path='/room/:name'
								element={
									<ProtectedRoute>
										<Room />
									</ProtectedRoute>
								}
							/>
							<Route path='/*' element={<NotFound />} />
						</Routes>
					</div>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
