// Import necessary dependencies
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

// Import your components/pages
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          {/* Add more routes as needed */}

          {/* A catch-all route for 404 errors */}
          <Route render={() => <div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
