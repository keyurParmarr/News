import React, { useState, useEffect } from "react";
import { Navbar } from "./COMPONENTS/NAVBAR/Navbar";
import "./App.css";
import { NewsCard } from "./COMPONENTS/NEWSCARD/NewsCard";
export const App = () => {
  const [newsinfo, setNewsinfo] = useState([]);
  const newsdata = async (url) => {
    let link =
      url ||
      "https://newsapi.org/v2/everything?q=world&apiKey=97169bca3a0c457681708cce3426af76";
    const res = await fetch(link);
    const data = await res.json();
    document.getElementsByClassName("app-card")[0].scrollTo(0, 0);
    setNewsinfo(data.articles);
  };
  useEffect(() => {
    newsdata();
  }, []);

  return (
    <div className="app">
      <Navbar newsdata={newsdata} />
      <div className="app-card">
        {newsinfo.map((data, i) => {
          return <NewsCard data={data} key={i} />;
        })}
      </div>
    </div>
  );
};
