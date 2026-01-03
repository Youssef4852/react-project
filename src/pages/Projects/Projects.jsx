import React from 'react'
import './Projects.css'
import ProjectImg1 from '../../assets/projects-1.jpg'
import ProjectImg2 from '../../assets/projects-2.jpg'
import ProjectImg3 from '../../assets/projects-3.jpg'
import ProjectImg4 from '../../assets/projects-4.jpg'
import ProjectImg5 from '../../assets/projects-5.jpg'
import ProjectImg6 from '../../assets/projects-6.jpg'
import ProjectCard from '../../components/ProjectCard'

function Projects() {
  return (
    <>
      <section className="projects" id="projects">
        <h2 className="main-heading">
          Lets Visit Our Client <span>Projects</span>
        </h2>
        <div className="container">
          <ProjectCard src={ProjectImg1} title="Artificial Intelligence"/>
          <ProjectCard src={ProjectImg2} title="Data Analysis"/>
          <ProjectCard src={ProjectImg3} title="Back End Development"/>
          <ProjectCard src={ProjectImg4} title="Front End Development"/>
          <ProjectCard src={ProjectImg5} title="Graphic Designer"/>
          <ProjectCard src={ProjectImg6} title="Ui Ux Designer"/>
        </div>
      </section>
    </>
  )
}

export default Projects