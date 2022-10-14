import React from "react";
import "./Card.css";

const Card = ({ imageUrl, primaryText, headline, description, name, url }) => {
  return (
    <div
      className="tc bg-dark-gray flex flex-column  br3 pa3 ma2 grow bw2 shadow-5 text-color"
      style={{ width: "400px" }}
    >
      <img src={require(`./images/${imageUrl}`)} alt="ads" />
      <div>
        <h2>{name}</h2>
        <p>{primaryText}</p>
        <p>{headline}</p>
        <p>{description}</p>
        <a href={url} className="button">
          Link to original website
        </a>
      </div>
    </div>
  );
};

export default Card;
