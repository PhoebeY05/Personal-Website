import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Navbar />
			{/* outer flex centers the inner box */}
			<div className="flex justify-center">
				{/* constrained, responsive content area that will be centered */}
				<div className="max-w-6xl w-full px-4">
					<Routes>
						<Route path="/" element={<AboutMe />} />
					</Routes>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
