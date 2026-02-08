import React from 'react'

function Skills() {
  return (
    <section id="Skills">
      <div>
        <h2 className="border-bottom m-3">Skills</h2>
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div className="card text-bg-light mb-3">
              <div className="card-header">Computer Science</div>
              <div className="card-body">
                <span className="badge custom-badge">Python</span>
                <span className="badge custom-badge">JavaScript</span>
                <span className="badge custom-badge">Java</span>
                <span className="badge custom-badge">PostgeSQL</span>
                <span className="badge custom-badge1">React.js</span>
                <span className="badge custom-badge1">Node.js</span>
                <span className="badge custom-badge1">Pandas</span>
              </div>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
            <div className="card text-bg-light mb-3">
              <div className="card-header">Electrical Engineering</div>
              <div className="card-body">
                <span className="badge custom-badge1">Microcontroller Programming</span>
                <span className="badge custom-badge1">Wireless Communication Protocols</span>
                <span className="badge custom-badge1">PID Control Systems</span>
                <span className="badge custom-badge1">Motor Control(PWM, Servo Control)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
