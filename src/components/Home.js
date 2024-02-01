import React, { useState } from 'react';
import Header from './Header';

function Home() {
  const [image, setImage] = useState("https://randomfox.ca/images/41.jpg");
  const [likes, setLikes] = useState(0);

  function handleNewFoxClick() {
    fetch("https://randomfox.ca/floof/")
      .then((response) => response.json())
      .then(({ image }) => {
        setImage(image);
        setLikes(0);
      });
  }

  function handleLikeClick() {
    setLikes(likes + 1);
    // setLikes(likes => likes + 1)
  }

  return (
    <div className="home-container">
      <Header />
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
