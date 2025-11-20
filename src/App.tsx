import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					{/* <Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} /> */}
				</Routes>
			</div>
		</>
	);
}

export default App;
