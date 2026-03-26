import React from 'react'
import "./Trust.css"

function Trust() {
  return (
    <div className='trust'>

      {/* LEFT TEXT */}
      <div className='trust-text'>
        <h2>Trusted expertise across corporate food operations</h2>
      </div>

      {/* RIGHT STATS */}
      <div className='trust-stats'>

        <div className='stat'>
          <h1>6+</h1>
          <p>Years in F&B Operations</p>
        </div>

        <div className='stat'>
          <h1>250+</h1>
          <p>Vendors in Our Network</p>
        </div>

        <div className='stat'>
          <h1>500+</h1>
          <p>Corporates Served</p>
        </div>

        <div className='stat'>
          <h1>8</h1>
          <p>Consultancy Services</p>
        </div>

      </div>

    </div>
  )
}

export default Trust;