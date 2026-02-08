import React from 'react'

function Coursework() {
  return (
    <section id="Relevant Coursework">
      <div>
        <h2 className="border-bottom m-3">Relevant Coursework</h2>
        <h3 className="text-center pb-4">2024-2025</h3>
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div className="card text-bg-light mb-3">
              <div className="card-header">Fall 2024</div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-info">
                    CS61A - Structure and Interpretation of Computer Programs
                  </li>
                  <br />
                  <li className="list-group-item list-group-item-info">ENGIN93 - Energy Engineering</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
            <div className="card text-bg-light mb-3">
              <div className="card-header">Spring 2025</div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-info">
                    EECS16A - Designing Information Devices and Systems I
                  </li>
                  <br />
                  <li className="list-group-item list-group-item-info">CS61B - Data Structures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center pb-4 pt-5">2025-2026</h3>
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div className="card text-bg-light mb-3">
              <div className="card-header">Fall 2025</div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-info">
                    CS61C - Machine Structures
                  </li>
                  <br />
                  <li className="list-group-item list-group-item-info">
                    16B - Introduction to Circuits & Devices</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
            <div className="card text-bg-light mb-3">
              <div className="card-header">Spring 2026</div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item list-group-item-info">
                    EE105 - Microelectronic Devices and Circuits
                  </li>
                  <br />
                  <li className="list-group-item list-group-item-info">
                    EE108 - Introduction to Electric Power and Renewable Energy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coursework
