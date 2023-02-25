import React from "react";

import "./Navbar.css";
export const Navbar = (props) => {
  const links = [
    "https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=97169bca3a0c457681708cce3426af76", //apple
    "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=97169bca3a0c457681708cce3426af76", //tesla
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=97169bca3a0c457681708cce3426af76", //usa
    "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=97169bca3a0c457681708cce3426af76", //technology
    "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=97169bca3a0c457681708cce3426af76", //wall street,
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=97169bca3a0c457681708cce3426af76", //india
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=97169bca3a0c457681708cce3426af76", //bbc news
    "https://newsapi.org/v2/everything?q=bitcoin&apiKey=97169bca3a0c457681708cce3426af76", //bitcoin
  ];
  return (
    <>
      <nav className="navbar">
        <span
          className="navbar-content"
          onClick={() => props.newsdata(links[5])}
        >
          <h4>INDIA</h4>
        </span>
        <span
          className="navbar-content"
          onClick={() => props.newsdata(links[2])}
        >
          <h4>USA </h4>
        </span>
        <span
          className="navbar-content"
          onClick={() => props.newsdata(links[0])}
        >
          <h4>APPLE </h4>
        </span>
        <span
          className="navbar-content"
          onClick={() => props.newsdata(links[1])}
        >
          <h4>TESLA </h4>
        </span>
        <span
          className="navbar-content"
          onClick={() => props.newsdata(links[3])}
        >
          <h4>TECHNOLOGY </h4>
        </span>
        <span
          className="navbar-content"
          onClick={() => props.newsdata(links[4])}
        >
          <h4>WALL STREET </h4>
        </span>
        <span
          className="navbar-content"
          onClick={() => props.newsdata(links[7])}
        >
          <h4>BITCOIN </h4>
        </span>
        <span
          className="navbar-content"
          onClick={() => props.newsdata(links[6])}
        >
          <h4>BBC NEWS </h4>
        </span>
      </nav>
      <div className="title">
        <h1>SASTA NEWS </h1>
      </div>
    </>
  );
};
