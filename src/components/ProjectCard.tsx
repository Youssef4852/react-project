import React from "react";
import Button from "./Button.js";

interface ProjectCardProps {
  src: string;
  title: string;
  icon: string;
}

function ProjectCard({src, title, icon}: ProjectCardProps) {
  return (
    <div className="card">
      <div className="card-head">
        <img src={src} alt="Projects-1" />
        <div className="card-body">
          <div className="card-body-head">
            <h4>{title}</h4>
            <i className={`bx bx-${icon}`}></i>
          </div>
          <div className="card-body-text">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum,
              adipisci!
            </p>
          </div>
          <div className="card-foot">
            <Button text="See More" type="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
