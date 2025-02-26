import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShieldHalved,
    faStopwatch20,
    faGaugeHigh,
  } from "@fortawesome/free-solid-svg-icons";

import './features.css'

function Features() {
  return (
    <div>
        <div className="display-3 mt-3">Why Bakkiego</div>
      <div className="container mt-5 ">
        <div className="card-group text-center" style={{height : "500px", gap : "20px"}}>
          {/* Fisrt Feature */}
          <div className="card features-styles">
            <div className="card-body">
              <div className="card-header">
                <FontAwesomeIcon icon={faShieldHalved} /><br/>
                Safe Verification
                </div>  
              <div className="card-text">
                We ensure all Bakkies vehicles and Drivers are vetted and
                compliant with safety rules. Our Solution guarantees delivery
                for every trip with our delivery confirmation code before any
                driver completes his trip
              </div>
            </div>
          </div>
          {/* Second Feature */}
          <div className="card features-styles" >
            <div className="card-body">
              <div className="card-header">
                <FontAwesomeIcon icon={faStopwatch20} /><br/>
                Fast Pickups
                </div>  
              <div className="card-text">
                Easy and quick booking in just 2 tabs just add both location
                details and in the next tab just acceptance from the driver for
                the ride. Here we goo!
              </div>
            </div>
          </div>
          {/* Third Feature */}
          <div className="card features-styles">
            <div className="card-body">
              <div className="card-header">
                <FontAwesomeIcon icon={faGaugeHigh} /><br/>
                Effective deliveries
                </div>  
              <div className="card-text">
                Bakkiego aims to offer quick and efficiant delivery services to
                its customer.The app promises to deliver within the shortest
                possible time to meet the needs of its usersh
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
