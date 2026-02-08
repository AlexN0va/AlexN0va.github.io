import React from 'react'

function Intro() {
  return (
    <section id="Intro">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="imgme col-10 col-sm-8 col-lg-6">
            <img
              src="/images/_DSC7713.JPG"
              alt="picture of me"
              className="d-block mx-lg-auto img-fluid rounded-circle profile-image"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Alex Nava</h1>
            <p className="lead">
              I am an Electrical Engineering and Computer Science student at UC Berkeley
              I am passionate about Hardware engineering, circuit design, embedded systems, and
              full-stack web development.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="https://www.linkedin.com/in/alexnava123/overlay/1743400232250/single-media-viewer/?profileId=ACoAADpuNAkBhD2YREjmJFJAcH2BuxojAjLm05k"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg px-4 me-md-2"
              >
                Resume
              </a>
              <div className="socLinkWrap">
                <a
                  className="socLink"
                  href="https://www.linkedin.com/in/alexnava123/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="px-4 fa-brands fa-linkedin fa-3x"></i>
                </a>
                <a
                  className="socLink"
                  href="https://github.com/AlexN0va"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="px-4 fa-brands fa-github fa-3x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
