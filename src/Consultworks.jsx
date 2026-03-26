import React, { useState } from 'react'
import consultworks1 from "./assets/Consultworks1.jpg";
import consultworks2 from "./assets/Consultworks2.jpg";
import consultworks3 from "./assets/Consultworks3.jpg";
import "./Consultworks.css";
function Consultworks() {

  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      title: "Free Discovery Call",
      subtitle: "Honest Needs Assessment",
      img: consultworks1
    },
    {
      title: "On-Site Kitchen Audit",
      subtitle: "On-Site Operations Audit",
      img: consultworks2
    },
    {
      title: "Action Plan & Engagement",
      subtitle: "Action Plan Implementation",
      img: consultworks3
    }
  ];

  return (
    <div className='consultworks'>
      <div className='consult-container'>

        {/* LEFT IMAGE */}
        <div className='consult-left'>
          <img 
            src={data[activeIndex].img} 
            alt="consult" 
            className='consultimg'
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className='consult-right'>
          <div className='consult-text'>

          

            <h3 className='consulth3'>How HOGIST <br/>Consult Works</h3>

            {data.map((item, index) => (
              <div 
  key={index} 
  onClick={() => setActiveIndex(index)} 
  className={activeIndex === index ? "active" : ""}
  style={{ cursor: "pointer" }}
>
                <h2 className='consulth2'>{item.title}</h2>
                <p className='consultp'>{item.subtitle}</p>
              </div>
            ))}
            <h5 className='consulth5'>Consultation Audit Execution
</h5>
<p className='consultp'>Assess, audit, implement improvements with training, tracking, and results.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Consultworks;