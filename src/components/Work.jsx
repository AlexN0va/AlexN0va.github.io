import React from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function Work() {

  return (
    <section id="Work">
      <h2 className="border-bottom m-3">Projects</h2>
      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {projects.map((project) => (
              <div key={project.id} id={project.id} className="col">
                <Link
                  to={`/project/${project.id}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="card shadow-sm project-card">
                    <img
                      className="card-img-top project-image"
                      src={project.image}
                      alt={project.title}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        <b>{project.title}</b> {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
