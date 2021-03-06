import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function gameCard(props) {
  const image = props.cover
    ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${props.cover}.jpg`
    : "";
  const newRating = props.rating ? props.rating.toFixed(0) : "NA";
  return (
    <li>
        <Link to={"/" + props.id}>
      <div className="card uk-card uk-card-default uk-box-shadow-hover-xlarge">
          <div className="uk-card-media-top">
            <img src={image} alt="placeholder"></img>
            <span className="rating">{newRating}</span>
          </div>
        <div className="cardBody uk-card-body">
          <p className="cardTitle">{props.name} </p>
          {props.children}
        </div>
      </div>
        </Link>
    </li>
  );
}
