// Import necessary dependencies
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

// Import your components/pages
import Home from './components/Home';
import SignUp from './components/SignUp';
import Header from './/components/Header';
import LogIn from './components/LogIn';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<LogIn isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          {/* Add more routes as needed */}

          {/* A catch-all route for 404 errors */}
          <Route render={() => <div>Page not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
