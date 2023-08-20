import React, { useEffect, useState } from "react";
import "./App.css";
import { clientKey } from "./data";
import Photo from "./Photo";

const clientId = `?client_id=${clientKey}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const getPictures = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchUrl}${clientId}${urlPage}${urlQuery}`;
    } else {
      url = `${mainUrl}${clientId}${urlPage}`;
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data.results);
      console.log(photos);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPictures();
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;
    if (page === 1) {
      getPictures();
    }
    setPage(1);
  };
  return (
    <main className="app">
      <section>
        <h3>Picture Gallery</h3>
        <form className="form-search" onSubmit={handleSubmit}>
          <input
            className="form-input"
            type="text"
            placeholder="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="form-btn" type="submit">
            Search
          </button>
        </form>
        <section className="photos">
          {photos?.map((photo) => {
            return <Photo key={photo.id} photo={photo} />;
          })}
        </section>
      </section>
      <div className="loading">{loading && <p>...Loading</p>}</div>
    </main>
  );
};

export default App;
