import React, { useState } from "react";
import "./Photo.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Photo = ({ photo, newQuery }) => {
  // const [toggle, setToggle] = useState(false);
  const [numOne, setNumOne] = useState(null);
  const [numTwo, setNumTwo] = useState(null);
  const [description, setDescription] = useState("");

  let str;

  const getDescription = (start, end) => {
    str = photo?.alt_description.split(" ").splice(start, end).join(" ");
    setDescription(str);
    newQuery(str);
  };

  return (
    <main className="photo">
      <LazyLoadImage
        className="photo_img"
        src={photo?.urls?.raw}
        alt={photo?.alt_description}
        effect="blur"
        width="250px"
        height="250px"
        // onMouseOver={() => setToggle(true)}
        // onMouseOut={() => setToggle(false)}
      />
      {/* {toggle && ( */}
      <div className="photo_details">
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
        <p>{description}</p>
        <input
          type="number"
          value={numOne}
          onChange={(e) => setNumOne(e.target.value)}
        />
        <input
          type="number"
          value={numTwo}
          onChange={(e) => setNumTwo(e.target.value)}
        />
        <button onClick={() => getDescription(numOne, numTwo)}>
          Get String
        </button>
      </div>
      {/* )} */}
    </main>
  );
};

export default Photo;
