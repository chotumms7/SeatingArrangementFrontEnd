

import React from 'react';
import Classroom from "./Images/Classroom.jpeg";
import Library from "./Images/Library.jpg";
import Campus from "./Images/Campus.jpg";
import Lab from "./Images/Lab.jpg";
import Playarea from "./Images/Playarea.jpg";

import "./Gallery.css"; 

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>Gallery</h2>
      <p>This is the gallery page. It will display the campus pictures here.</p>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img
            src={Classroom}
            alt="Classroom"
            className="gallery-img"
          />
          <p>Classroom</p>
        </div>
        <div className="gallery-item">
          <img
            src={Library}
            alt="Library"
            className="gallery-img"
          />
          <p>Library</p>
        </div>
        <div className="gallery-item">
          <img
            src={Campus}
            alt="Campus"
            className="gallery-img"
          />
          <p>Campus</p>
        </div>
        <div className="gallery-item">
          <img
            src={Lab}
            alt="Lab"
            className="gallery-img"
          />
          <p>Lab</p>
        </div>
        <div className="gallery-item">
          <img
            src={Playarea}
            alt="Playarea"
            className="gallery-img"
          />
          <p>Playarea</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;





