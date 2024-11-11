import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MedicsPage from './pages/MedicsPage';

function App() {
    return (
        <Router>
            <div className="h-screen w-full">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/medics" element={<MedicsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
