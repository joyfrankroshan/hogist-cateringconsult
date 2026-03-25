import React from 'react'
import stafftraining from "./assets/stafftraining.jpg"
import sku from "./assets/sku.jpg"
import kitchendesign from "./assets/kitchendesign.jpg";
import menuplanning from "./assets/menuplanning.jpg";
import foodsafety from "./assets/foodsafety.jpg";
import equipment from "./assets/equipment.jpg";
import customer from "./assets/customer.jpg";
import costcontrol from "./assets/costcontrol.jpg";


import "./Comprehensive.css";
import comprehensivesvg from "./assets/comprehensivesvg.png";










function Comprehensive() {
  return (
    <div className='comprehensive'>
        <div className='comprehensive-container'>
            <div className='comprehensive-text'>
                                    <img src={comprehensivesvg} className='comprehensivesvg'></img>


            <div className='comprehensive-heading -row'>
                            <p className='comprehensive-para'> What We Do</p>

                <h1 className='comprehensiveh1'>8 Comprehensive Services Crafted From <span>Extensive Real-World Operational Expertise</span> and Proven Practices.</h1>
                
            </div>
                
<p className='comprehensive-paragraph'>
    Every service HOGIST Consult offers comes directly from what we've seen break down in real corporate kitchens across Tamil Nadu — not theory, but field experience.
</p>
</div>
<div className='comprehensive-img-text'>

  <div className='column'>
    {/* LEFT COLUMN */}
    <div className='item'>
      <img src={stafftraining} />
      <div>
        <h5>Staffing & Training</h5>
        <p>Fortnightly QHSE training</p>
        <p>Service standards coaching</p>
<p>Action plan development</p>
<p>Accountability tracking</p>

      </div>
    </div>
    

    <div className='item'>
      <img src={sku} />
      <div>
        <h5>SKU Management</h5>
        <p>Inventory tracking</p>
        <p>Wastage reduction</p>
<p>Procurement efficiency</p>
<p>Inventory tracking</p>
      </div>
    </div>
    <div className='item'>
      <img src={foodsafety} />
      <div>
        <h5>Food Safety & Hygiene Audits</h5>
        <p>Fortnightly QHSE kitchen audits</p>
<p>Post-audit action plans</p>
<p>Compliance monitoring</p>
<p>FSSAI readiness checks</p>
      </div>
    </div>
    <div className='item'>
      <img src={equipment} />
      <div>
        <h5>Equipment Suggestion</h5>
       <p>Existing equipment assessment</p>
<p>New equipment recommendation</p>
<p>Detailed specifications</p>
<p>Budget-aligned sourcing</p>

      </div>
    </div>
  </div>

  <div className='column'>
    {/* RIGHT COLUMN */}
    <div className='item'>
      <img src={menuplanning} />
      <div>
        <h5>Menu Planning</h5>
        <p>Daily production plans</p>
        <p>Procurement planning</p>
<p>Recipe standardization</p>
<p>Client-feedback adjustments</p>
      </div>
    </div>

    <div className='item'>
      <img src={kitchendesign} />
      <div>
        <h5>Kitchen Design</h5>
        <p>Workflow optimization</p>
<p>Existing layout analysis</p>
<p>Zone planning (prep/cook/wash)</p>
<p>Traffic flow redesign</p>

      </div>
    </div>
     <div className='item'>
      <img src={customer} />
      <div>
        <h5>Customer Care Support
</h5>
       <p>Dedicated WhatsApp channel</p>
<p>Daily communication tracking</p>
<p>Delivery time monitoring</p>
<p>Rapid issue resolution</p>

      </div>
    </div>
    <div className='item'>
      <img src={costcontrol} />
      <div>
        <h5>Cost Control & Budgeting

</h5>
       <p>Monthly budget reviews</p>
<p>Fortnightly assessments</p>
<p>Variance analysis</p>
<p>Cost-saving identification</p>

      </div>
    </div>
  </div>

</div>


</div>
        
 </div>

  )
}

export default Comprehensive;