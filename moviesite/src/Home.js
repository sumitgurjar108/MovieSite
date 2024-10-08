import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const timer = setTimeout(() => {
         navigate('/movies');
      }, 8000);

      // Cleanup the timer 
      return () => clearTimeout(timer);
   }, [navigate]);

   return (
      <div className="home">
         <video className="background-video" autoPlay muted loop>
            <source src="12991847-uhd_3840_2160_30fps.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
         </video>
         <div className="home-content">
            <h1>Welcome to MovieWorld</h1>
            <p>Your ultimate destination for discovering amazing movies.</p>
         </div>
      </div>
   );
};

export default Home;
