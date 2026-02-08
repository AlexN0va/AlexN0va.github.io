import React, { useEffect, useRef } from 'react'
import TypedAnimation from './TypedAnimation'
import ThreeAnimation from './ThreeAnimation'

function Hero({ isRealmChanged }) {
  return (
    <div id="opener">
      {isRealmChanged ? (
        <ThreeAnimation />
      ) : (
        <section id="normal" className="gradient-background mg-0">
          <div className="px-4 pt-5 my-5 text-center border-bottom mt-0">
            <div className="cloud1 my-5">
              <img src="/images/cloud.png" alt="cloud" />
            </div>
            <h1 className="display-4 fw-bold text-body-emphasis">Hello</h1>

            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                I'm Alex Nava, a <TypedAnimation />
              </p>
            </div>
            <div className="cloud2 my-5">
              <img src="/images/cloud.png" alt="cloud" />
            </div>
            <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
              <div className="container px-5">
                <img
                  src="/images/barn-svgrepo-com.svg"
                  className="img"
                  alt="Example image"
                  height="250"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Hero
