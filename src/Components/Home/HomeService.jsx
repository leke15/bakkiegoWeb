import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import "./homeservice.css";
import serviceBackground from "../../Assets/images/customerMoving.jpg";

function HomeService() {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mb-4">
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5 mb-4">
            <div className="card hs-card-styles text-center">
              <div className="card-title">
                <FontAwesomeIcon icon={faTruckFast} className="service-icon" />
              </div>
              <div className="card-body">
                <button className="btn hs-btn-text">Request a Bakkie</button>
              </div>
            </div>
          </div>

          <div className="col-md-5 mb-4">
            <div className="card hs-card-styles text-center">
              <div className="card-title">
                <FontAwesomeIcon icon={faPeopleGroup} className="service-icon" />
              </div>
              <div className="card-body">
                <button className="btn hs-btn-text">Join our Team </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeService;