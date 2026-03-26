import React from 'react'
import "./Card.css";
import card1 from "./assets/card1.jpg"
import card2 from "./assets/card2.jpg"
import card3 from "./assets/card3.jpg"
import cardsvg from "./assets/cardsvg.jpg"




function Card() {
  return (
    <div className='card'>
        <div className='card-text'>
            <div className='card-small'>
            Sound Familiar?

        </div>
        <div className='card-heading'>
            These Are the Signs You
Need a Catering Consultant

        </div>
        </div>
        <div className='card-cards'>

  <div className="card-container">
    <h2 className="card-title">Employees Constantly Complaining
</h2>
    <p className="card-subtitle">
Inconsistent food quality
    </p>

    <div className="card-image-wrapper">
      <img src={card1} alt="food" />
    </div>

    <p className="card-link">Learn More</p>
  </div>

  <div className="card-container">   {/* 🔥 SAME CLASS */}
    <h2 className="card-title">No Visibility Into Food Costs</h2>
    <p className="card-subtitle">
Unclear catering expenses
    </p>

    <div className="card-image-wrapper">
      <img src={card2} alt="food" />
    </div>

    <p className="card-link">Learn More</p>
  </div>
  <div className="card-container">   {/* 🔥 SAME CLASS */}
    <h2 className="card-title">Failing Hygiene & FSSAI Audits
</h2>
    <p className="card-subtitle">
Kitchen compliance failures
    </p>

    <div className="card-image-wrapper">
      <img src={card3} alt="food" />
    </div>

    <p className="card-link">Learn More</p>
  </div>

</div>
<div className='button'>
  <button className='card-button'>Discover more</button>


</div>
<div className='card-svg'>
  <img src={cardsvg} className='cardsvg'></img>


</div>
        
        </div>
        


    
  )
}

export default Card;