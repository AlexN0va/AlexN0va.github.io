import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { projects } from '../data/projects'
import Header from './Header'
import Footer from './Footer'

function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)
  const [isRealmChanged, setIsRealmChanged] = useState(false)

  if (!project) {
    return (
      <div className="container py-5">
        <h1>Project Not Found</h1>
        <Link to="/">Go back home</Link>
      </div>
    )
  }

  return (
    <>
      <Header onRealmChange={() => setIsRealmChanged(!isRealmChanged)} />
      <div className="container py-5">
        <Link to="/" className="btn btn-outline-secondary mb-4">
          ← Back to Projects
        </Link>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 mb-4">{project.title}</h1>
            <img
              src={project.image}
              alt={project.title}
              className="img-fluid rounded mb-4"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
            <div className="mb-4">
              <p className="lead">{project.description}</p>
            </div>
            <div className="border-top pt-4">
              <h3>Project Documentation</h3>
              <div className="mt-3 markdown-content">
                <ReactMarkdown
                  components={{
                    img: ({ node, ...props }) => (
                      <img
                        {...props}
                        className="img-fluid rounded my-3"
                        style={{ maxWidth: '100%' }}
                      />
                    ),
                  }}
                >
                  {project.content}
                </ReactMarkdown>
              </div>
            </div>
            <div className="mt-5 pt-4 border-top">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg"
              >
                <i className="fa-brands fa-github me-2"></i>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProjectDetail
