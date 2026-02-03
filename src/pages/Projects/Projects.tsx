import React from "react";
import "./Projects.css";
import ProjectImg1 from "../../assets/projects-1.jpg";
import ProjectImg2 from "../../assets/projects-2.jpg";
import ProjectImg3 from "../../assets/projects-3.jpg";
import ProjectImg4 from "../../assets/projects-4.jpg";
import ProjectImg5 from "../../assets/projects-5.jpg";
import ProjectImg6 from "../../assets/projects-6.jpg";
import ProjectCard from "../../components/ProjectCard.js";

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="main-heading">
          Lets Visit Our Client <span>Projects</span>
        </h2>
        <div className="container">
          <ProjectCard
            src={ProjectImg1}
            title="Artificial Intelligence"
            icon="chip"
          />
          <ProjectCard
            src={ProjectImg2}
            title="Data Analysis"
            icon="bar-chart-alt-2"
          />
          <ProjectCard
            src={ProjectImg3}
            title="Back End Development"
            icon="data"
          />
          <ProjectCard
            src={ProjectImg4}
            title="Front End Development"
            icon="code-alt"
          />
          <ProjectCard
            src={ProjectImg5}
            title="Graphic Designer"
            icon="palette"
          />
          <ProjectCard src={ProjectImg6} title="Ui Ux Designer" icon="layout" />
        </div>
      </section>
    </>
  );
}

export default Projects;
