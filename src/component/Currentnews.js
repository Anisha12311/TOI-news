import React, { useEffect, useState } from "react";
import "../css/Cardtext.css";
const Currentnews = () => {
  const [data, setData] = useState([]);
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=24763142500249d69ad61d5b76412e27";

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((datatest) => {
        const dataformat = datatest.articles;
        var dataUse = [];
        for (let i = 0; i < 6; i++) {
          dataUse.push(dataformat[i]);
        }
        console.log(dataUse);
        setData(dataUse);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const renderlist = data.map((dataform) => {
    return (
      <div className="four wide column">
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={dataform.urlToImage} alt="" />
            </div>
            <div className="content">
              <div className="header">{dataform.title}</div>
              <div>{dataform.content}</div>
              <a href={dataform.url}>More Information</a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderlist}</>;
};

export default Currentnews;
