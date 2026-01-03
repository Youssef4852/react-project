import React from "react";

function ProjectCard({ src, title }) {
  return (
    <div className="card">
      <div className="card-head">
        <img src={src} alt="Projects-1" />
        <div className="card-body">
          <div className="card-body-head">
            <h4>{title}</h4>
            <i className="bx bx-code-alt"></i>
          </div>
          <div className="card-body-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              adipisci!
            </p>
          </div>
          <div className="card-foot">
            <button className="btn fill">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;