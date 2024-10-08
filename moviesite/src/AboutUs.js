import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Movie App! We are passionate about providing movie enthusiasts with
        the best online movie browsing experience.
        Our platform is designed to deliver detailed movie information, including genres,
        release years, and descriptions, allowing users
        to explore the latest releases, timeless classics, and everything in between.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make movie discovery and selection as enjoyable as watching the
        movies themselves. We strive to:
      </p>
      <ul>
        <li>Provide accurate, up-to-date information on a wide range of movies.</li>
        <li>Offer an easy-to-use platform for users to find the movies they love.</li>
        <li>Support movie lovers with personalized recommendations and curated lists.</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <p>
        With countless movie platforms available, what sets us apart? Here are a few reasons
        why we believe our Movie App offers a unique experience:
      </p>
      <ul>
        <li><strong>Comprehensive Movie Database:</strong> Our vast collection of movie data
          includes detailed information on films from various genres and
          eras.</li>
        <li><strong>User-Friendly Interface:</strong> We've designed our app with ease of
          use in mind, so you can quickly find what you're looking for
          without hassle.</li>
        <li><strong>Regular Updates:</strong> We keep our content fresh by adding new
          releases and maintaining the latest information on popular films.
        </li>
      </ul>

      <h2>Meet the Team</h2>
      <p>
        We are a dedicated team of movie buffs and tech enthusiasts who came together to
        create an app that combines our love for cinema with the latest technology.
        Our goal is to help users like you find the perfect movie for every mood, occasion,
        and genre preference.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have any questions, feedback, or suggestions? We’d love to hear from you! Feel free
        to reach out via our <a href="/contact">Contact Us</a> page.
      </p>

      <div className="team">
        <div className="team-member">
          <img src="https://cdn.pixabay.com/photo/2021/04/05/12/38/man-6153295_1280.jpg" alt="Team Member" />
          <h3>Sumit Singh</h3>
          <p>Founder & CEO</p>
        </div>
        <div className="team-member">
          <img src="https://th.bing.com/th/id/R.c6ce4ef394413869bb06283db819c628?rik=dsxV%2b0CdNNsOmA&riu=http%3a%2f%2fsfsco.net%2fwp-content%2fuploads%2f2016%2f04%2f6140989632_1c8066563d_b.jpg&ehk=uLWHPAmp35gMcoEmYFZKjh1wg8vpPdCZcGGtPh72e7w%3d&risl=&pid=ImgRaw&r=0" alt="Team Member" />
          <h3>Govind Chandna</h3>
          <p>Lead Developer</p>
        </div>
        <div className="team-member">
          <img src="https://th.bing.com/th/id/OIP.ubTBzppQJ2s_B7h9qwfj8QHaE8?rs=1&pid=ImgDetMain" alt="Team Member" />
          <h3>Marc Randolph</h3>
          <p>Head of Content</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;