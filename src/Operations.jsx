import React from 'react'
import operations from './assets/operations.jpg';
import operationssvg from "./assets/os.jpg";
import "./Operations.css"

function Operations() {
  return (
    <div className='operations'>

      {/* LEFT TEXT + BOXES */}
      <div className='operations-text'>

        <div className="stars">
          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
        </div>

        <p>Why HOGIST</p>

        <h3>
          Not Theory.<br/>
          Real Operations.
        </h3>

        <p>
          We built this consultancy from 6 years of running actual catering operations — not a classroom.
        </p>

        {/* BOXES */}
        <div className="operations-box">

          <div className="box">
            <span className="tick">✔</span>
            <div>
              <h5>Data-Backed Advisory</h5>
              <p>Our recommendations come from real order, cost, and complaint data.</p>
            </div>
          </div>

          <div className="box">
            <span className="tick">✔</span>
            <div>
              <h5>Fortnightly Accountability</h5>
              <p>We stay with you — auditing and correcting every two weeks.</p>
            </div>
          </div>

          <div className="box">
            <span className="tick">✔</span>
            <div>
              <h5>250+ Vendor Network</h5>
              <p>We know the best suppliers across Tamil Nadu.</p>
            </div>
          </div>

          <div className="box">
            <span className="tick">✔</span>
            <div>
              <h5>Corporate + Caterer Expertise</h5>
              <p>We ensure smooth execution and cost efficiency.</p>
            </div>
          </div>

        </div>

        {/* ✅ SVG BELOW BOXES */}
        <div className="operations-svg">
          <img src={operationssvg} alt="svg" />
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className='operations-img'>
        <div className='operations--img'>
          <img src={operations} alt="operations-img" />
        </div>
      </div>

    </div>
  )
}

export default Operations;