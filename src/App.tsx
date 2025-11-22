import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Background from './components/Background';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';
import IndividualProject from './pages/IndividualProject';
import IndividualSkill from './pages/IndividualSkill';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import IndividualExperience from './pages/IndividualExperience';
import Competitions from './pages/Competitions';

function App() {
	const location = useLocation();
	const isNotFoundPage =
		location.pathname === '/404' || !['/', '/projects', '/skills'].some((path) => location.pathname.startsWith(path));

	return (
		<>
			{!isNotFoundPage && <Navbar />}
			{/* outer flex centers the inner box */}
			<Background>
				<div className="flex justify-center z-10 bg-transparent">
					{/* constrained, responsive content area that will be centered */}
					<Routes>
						<Route path="/" element={<AboutMe />} />
						<Route path="/skills/:name" element={<IndividualSkill />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/projects/:name" element={<IndividualProject />} />
						<Route path="/experience" element={<Experiences />} />
						<Route path="/experience/:name" element={<IndividualExperience />} />
						<Route path="/competitions" element={<Competitions />} />
						<Route path="/404" element={<NotFound />} />
						<Route path="*" element={<Navigate to="/404" replace />} />
					</Routes>
				</div>
			</Background>
			{!isNotFoundPage && <Footer />}
		</>
	);
}

export default App;
