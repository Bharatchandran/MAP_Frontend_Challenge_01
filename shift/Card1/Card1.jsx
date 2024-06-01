import React, { useState, useEffect } from 'react';
import './Card1.css';

const Card = ({ title, description, image, tag }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => setLoading(false);
  }, [image]);

  return (
    <div className="card">
      {loading ? (
        <div className="skeleton">
          <div className="skeleton-image"></div>
          <div className="skeleton-text"></div>
          <div className="skeleton-text short"></div>
        </div>
      ) : (
        <>
          <div className="card-image-wrapper">
            <img src={image} alt={title} className="card-image" />
          </div>
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
            {tag && <span className="card-tag">{tag}</span>}
            <div className="card-actions">
              <button className="card-action">Mark for Later</button>
              <button className="card-action">Share</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;