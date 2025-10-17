import { useState } from 'react';
import Quiz from './Components/Quiz';
import CheckIn from './Components/CheckIn';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="bg-light min-vh-100 py-4, p-3, m-3">
      <div className="container, m-4, p-4">
        <h1 className="text-center mb-4 text-dark">Managing State App</h1>
        <Quiz />
        <CheckIn />
        <About />
      </div>
    </div>
  );
}

export default App;
