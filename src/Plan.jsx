import React from 'react'
import plan1 from"./assets/plan1.jpg";
import plan2 from"./assets/plan2.jpg";
import plan3 from"./assets/qw.jpg";
import plansvg from "./assets/plansvg.jpg";
import "./Plan.css";





function Plan() {
  return (
    <div className='plan'>
        <div className='plan-container'>
            <div className='plan-top'>
                <h6>Investment
</h6>
<h1>Choose the Right Plan
For Your Operation
Tier 1
</h1>
</div>
<div className="plan-box">
  <div className="plan-box1">

    {/* IMAGE */}
    <div className="img-wrapper">
      <img src={plan1} className="plan1-img" alt="plan" />
    </div>

    {/* TEXT CONTENT */}
   <div className="plan-details">

  <p className="tier1">Tier 1</p>

  <h3 className="consult1">Quick Consult</h3>

  {/* PRICE BLOCK */}
  <div className="price-box">
    <h2 className="amount1">₹10,000</h2>
    <span className="duration">One-time engagement</span>
  </div>

  {/* FEATURES */}
  <div className="features">
    <div className="feature-item">
  <i className="bi bi-check-lg"></i>
  <p>1 discovery + advisory session</p>
</div>

    <div className="feature-item">
      <i className="bi bi-check-lg"></i>
      <p>Vendor recommendations</p>
    </div>

    <div className="feature-item">
      <i className="bi bi-check-lg"></i>
      <p>Menu & budget planning</p>
    </div>

    <div className="feature-item">
      <i className="bi bi-check-lg"></i>
      <p>Written action plan</p>
    </div>

    <div className="feature-item">
      <i className="bi bi-check-lg"></i>
      <p>Email support for 15 days</p>
    </div>
  </div>

</div>
<div className='plan-button'>
    <button className='plan-box1-button'>Get Started</button>


</div>


  </div>

  

   <div className="plan-box2">

    <div className="img-wrapper2">
      <img src={plan2} className="plan2-img" alt="plan" />
    </div>

   <div className="plan-details">

  <p className="tier2">Tier 2</p>
<p className='premium'>
  Premium 
  <span className="gift-box">
    <i className="bi bi-gift-fill"></i>
  </span>
</p>
  <h3 className="consult1">Setup Consult</h3>

  <div className="price-box">
    <h2 className="amount2">₹50,000</h2>
    <span className="duration">Full setup engagement</span>
  </div>

  <div className="features">
    <div className="feature-item2">
  <i className="bi bi-check-lg"></i>
  <p>Full kitchen layout redesign
</p>
</div>

    <div className="feature-item2">
      <i className="bi bi-check-lg"></i>
      <p>Equipment specification & sourcing
</p>
    </div>

    <div className="feature-item2">
      <i className="bi bi-check-lg"></i>
      <p>Vendor contract advisory
</p>
    </div>

    <div className="feature-item2">
      <i className="bi bi-check-lg"></i>
      <p>FSSAI compliance roadmap
</p>
    </div>

    <div className="feature-item2">
      <i className="bi bi-check-lg"></i>
      <p>Staff training (2 sessions)</p>
    </div>
    <div className="feature-item2">
      <i className="bi bi-check-lg"></i>
      <p>30-day post-setup support
</p>
    </div>
  </div>

</div>
<div className='plan-button'>
    <button className='plan-box2-button'>Get Started</button>


</div>


  </div>
  
  <div className="plan-box3">

    <div className="img-wrapper3">
<img src={plan3} className="plan3-img" alt="plan" />    </div>

   <div className="plan-details">

  <p className="tier3">Tier 3</p>

  <h3 className="consult3">Retainer Consult</h3>

  <div className="price-box">
    <h2 className="amount3">₹20,000</h2>
    <span className="duration">Per month — ongoing</span>
  </div>

  <div className="features">
    <div className="feature-item">
  <i className="bi bi-check-lg"></i>
  <p>Fortnightly QHSE audits</p>
</div>

    <div className="feature-item">
      <i className="bi bi-check-lg"></i>
      <p>Monthly cost reviews</p>
    </div>

    <div className="feature-item">
      <i className="bi bi-check-lg"></i>
      <p>Staff training every 2 weeks</p>
    </div>

    <div className="feature-item">
      <i className="bi bi-check-lg"></i>
      <p>Dedicated WhatsApp support</p>
    </div>

    <div className="feature-item">
      <i className="bi bi-check-lg"></i>
      <p>Quarterly performance report</p>
    </div>
  </div>

</div>
<div className='plan-button'>
    <button className='plan-box3-button'>Get Started</button>

    </div>




  </div>
</div>
<div className='plan-svg'>
  <img src={plansvg} className='plansvg'></img>

</div>



           
            







                
            
        
        </div>
        </div>

  )
}

export default Plan;