import React, { useState } from "react";
import "./Photo.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Photo = ({ photo, parentCallback }) => {
  // const [toggle, setToggle] = useState(false);
  const [numOne, setNumOne] = useState(null);
  const [numTwo, setNumTwo] = useState(null);
  const [description, setDescription] = useState('')

  const getDescription = (start, end) => {
   let desc = photo?.alt_description.split(" ").splice(start, end).join(" ");
    setDescription(desc); 
    parentCallback(description)
  }

  return (
    <main className="photo">
      <LazyLoadImage
        className="photo_img"
        src={photo?.urls?.raw}
        alt={photo?.alt_description}
        effect="blur"
        width="275px"
        height="275px"
        // onMouseOver={() => setToggle(true)}
        // onMouseOut={() => setToggle(false)}
      />
      {/* {toggle && ( */}
        <div className="photo_details" >
          <p className="photo-desc">
            <span className="photo-tag">Description : </span>
            {photo?.alt_description}
          </p>
          <br></br>
          <p>
            <span>
              {description}
            </span>
          </p>
          <input type="number" value={numOne} onChange={(e) => setNumOne(e.target.value)}/>
          <input type="number" value={numTwo} onChange={(e) => setNumTwo(e.target.value)}/>
          <button onClick={() => getDescription(numOne, numTwo)}>Search</button>
          <p className="photo-author">
            <span className="photo-tag">Author : </span>
            {photo?.user?.name}
          </p>
          <a href={photo?.links?.html} target="_blank" rel="noopener">
            See Original Pic
          </a>
        </div>
      {/* )} */}
    </main>
  );
};

export default Photo;
