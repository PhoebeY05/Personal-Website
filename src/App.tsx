import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
	return (
		<>
			<Navbar />
			{/* outer flex centers the inner box */}
			<Background>
				<div className="flex justify-center z-10 bg-transparent">
					{/* constrained, responsive content area that will be centered */}
					<Routes>
						<Route path="/" element={<AboutMe />} />
					</Routes>
				</div>
			</Background>
			<Footer />
		</>
	);
}

export default App;
