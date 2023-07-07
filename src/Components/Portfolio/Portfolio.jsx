import React from "react";
import "./Portfolio.css";
import Data from "../../Data/portfolioDta";

const Portfolio = () => {
  return (
    <div className="Portfolio" id="Portfolio">
      <div className="heading">
        <h1>
          My <span>Portfolio</span>
        </h1>
      </div>
      <div className="portfolio-container">
        <div className="workList">
          {Data.map((project) => {
            const { id, image, description, title, link } = project;
            return (
              <div class="work" key={id}>
                <img src={image} />
                <div class="port-layer">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={link} target="_blank">
                    Visit
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
