import React, { useState } from "react";
import "./Photo.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Photo = ({ photo }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <main className="photo">
      <LazyLoadImage
        className="photo_img"
        src={photo?.urls?.raw}
        alt={photo?.alt_description}
        effect="blur"
        width="275px"
        height="275px"
        onMouseOver={() => setToggle(true)}
        onMouseOut={() => setToggle(false)}
      />
      {toggle && (
        <div className="photo_details" onMouseOver={() => setToggle(true)}>
          <p className="photo-desc">
            <span className="photo-tag">Description : </span>
            {photo?.alt_description}
          </p>
          <p className="photo-author">
            <span className="photo-tag">Author : </span>
            {photo?.user?.name}
          </p>
          <a href={photo?.links?.html} target="_blank" rel="noopener">
            See Original Pic
          </a>
        </div>
      )}
    </main>
  );
};

export default Photo;
