import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./receipes.css";
import Footer from "../imagecustom/footer";

const ReceipeContent = () => {
  const [receipeList, setReceipeList] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReceipes = async () => {
      try {
        const { status, data } = await axios.get('https://dummyjson.com/recipes');
        if (status === 200) {
          setReceipeList(data.recipes);
          setLoader(false);
        }
      } catch (err) {
        setError(true);
        setLoader(false);
      }
    };

    fetchReceipes();
  }, []);

  return (
    <>
      {loader ? (
        <div className="loader-container">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <center>
            <h1 className="title">Get Your Recipes Here</h1>
          </center>
          <div className="receipe-container">
            {receipeList.map((eachReceipe, index) => {
              const { name, image } = eachReceipe;
              return (
                <div className="receipe-card" key={index}>
                  <h3 className="receipe-name">{name}</h3>
                  <img src={image} alt={name} className="receipe-image" />
                  <button className="see-more-button">See More</button>
                </div>
              );
            })}
          </div>
        </>
      )}
      {error && <div className="error-message">Failed to load recipes. Please try again later.</div>}
      <Footer></Footer>
    </>
  );
};

export default ReceipeContent;
