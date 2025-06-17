import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Home({isLoggedIn,setIsLoggedIn}) {
  const navigate = useNavigate();
  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg");
  const [likes, setLikes] = useState(0);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleNewFoxClick() {
    console.log(isLoggedIn);
    if(!isLoggedIn) navigate('/login');

    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        setImage(image);
        setLikes(0);
      });
  }

  function handleLikeClick() {
    setLikes(likes => likes + 1)
  }

  return (
    <div className="home-container">
      <div className="home-section">
        <img src={image} alt="Random Fox" className="fox-image" />
        <div>
          <button className="fox-image-buttons" onClick={handleNewFoxClick}>New 🦊 Please</button>
         
          <button className="fox-image-buttons" onClick={handleLikeClick}>Likes: {likes}</button>


          
        </div>
      </div>
    </div>
  );
}

export default Home;
