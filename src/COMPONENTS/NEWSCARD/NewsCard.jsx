import React from "react";
import "./Newscard.css";
import img from "../../PICS/noimg.jpg";
export const NewsCard = (props) => {
  let title = props.data.title;
  if (props.data.title?.length > 85) {
    for (let i = 85; i > 0; i--) {
      if (title[i] === " ") {
        title = props.data.title.slice(0, i);
        break;
      }
      title = props.data.title.slice(0, i);
    }
  }
  let desc = props.data.description;
  if (props.data.description === null) {
    desc = "NO INFO AVAILABLE";
  }
  if (props.data.description?.length > 100) {
    for (let i = 100; i > 0; i--) {
      if (desc[i] === " ") {
        desc = props.data.description.slice(0, i);
        break;
      }
      desc = props.data.description.slice(0, i);
    }
  }
  return (
    <div className="news-card">
      <img
        src={props.data.urlToImage === null ? img : props.data.urlToImage}
        className="card-img-top"
        alt="NO IMAGE"
        height="200px"
        width="100%"
      />
      <div className="card-body">
        <p className="card-title">
          <strong>{title}...</strong>
        </p>
        <p className="card-text">{desc}...</p>
      </div>
      <div className="button-box">
        <a href={props.data.url} target="_blank" className="a-btn">
          <button className="news-button">READ MORE</button>
        </a>
      </div>
    </div>
  );
};
