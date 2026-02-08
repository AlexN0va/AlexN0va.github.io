import React from 'react'

function Header({ onRealmChange }) {
  return (
    <section id="Header">
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <button
                      id="changeRealm"
                      type="button"
                      className="btn btn-dark"
                      onClick={onRealmChange}
                    >
                      Change Realm
                    </button>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark active" aria-current="page" href="#">
                      #Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#About Me">
                      #About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#Skills">
                      #Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#Relevant Coursework">
                      #Relevant Coursework
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-dark" href="#Work">
                      #Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Header
