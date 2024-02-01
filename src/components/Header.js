import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Header({isLoggedIn,setIsLoggedIn}) {
    const navigate = useNavigate();
    const [user, setUser] =useState(null);

    function handleLoginClick() {
        setUser({
          id: 1,
          username: "Ian"
        })
        navigate('/login')
      }
      
      function handleLogoutClick() {
        setIsLoggedIn(false)
        setUser(null)
    }
    return (
      <div className="header-container">
        <h1 className="header-text">🦊 Fox Gallery 🦊</h1>
        <nav>
        {isLoggedIn ? (
          <button onClick={handleLogoutClick}>Logout</button>
        ) : (
          <button onClick={handleLoginClick}>Login</button>
        )}
      </nav>
      </div>
    );
  }

export default Header;