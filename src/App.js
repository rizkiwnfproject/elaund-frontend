// import logo from './logo.svg';
import './styles/Button.css';
import HomePage from './pages/HomePage';
import Login from './pages/LoginPage'; // Import halaman Login
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Tambahkan ini


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route untuk halaman utama */}
          <Route path="/" element={<HomePage />} />

          {/* Route untuk halaman login */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
