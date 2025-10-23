import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Quiz from './Components/Quiz';
import CheckIn from './Components/CheckIn';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//  navigation for navbar
function NavButton({ to, label }) {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(to)} className=" m-2">
      {label}
    </button>
  );
}
// navbar with components
function Home() {
  return (
    <div className='homepg'>
      <h2 class="p-3 mb-2 bg-success text-white">Welcome to my State Management App</h2>
      <p>Click a button of your choice!</p>
<NavButton to="/quiz" label="Go to Quiz" className="btn btn-primary m-2" />
<NavButton to="/checkin" label="Go to CheckIn" className="btn btn-warning m-2" />
<NavButton to="/about" label="Go to About" className="btn btn-success m-2" />
</div>
  );
}

// 
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
