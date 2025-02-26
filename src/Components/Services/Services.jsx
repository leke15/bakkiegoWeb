import React from "react";
import oneTon from "../../Assets/images/one-ton.jpg";
import fourTon from "../../Assets/images/four-ton.jpeg";
import fiveKg from "../../Assets/images/five-hundred.jpeg";
import eightTon from "../../Assets/images/eight-ton.jpg";
import Guide from "../Guide/guide";
import Partner from "../Partner/Partner"
import "./services.css";

function Services() {
  return (
    <div style={{ marginBottom: "50px" }}>
   <div>
    <h1 className="text-center"><b>Services</b></h1>
   </div>

   <div className="container-sm d-flex justify-content-center">
    <div className="card-group flex-wrap d-flex justify-content-center" style={{ gap: "45px" }}>
      <div
        className="card service-hover"
        style={{ width: "250px", borderRadius: "20px", backgroundColor: "black" }}
      >
        <div className="card-body text-center" style={{ color: "var(--primary-color)" }}>
          <img
            src={fiveKg}
            alt="Five Hundred Kilo Bakkie"
            className="card-img-top"
            style={{ width: "200px", height: "150px" }}
          />
          <h2 className="card-title">Smart 1</h2>
          <div className="card-text">
            Trucks weighing from 500kg to 1 tons. Best for household goods and deliveries
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>

      <div
        className="card service-hover"
        style={{ width: "250px", borderRadius: "20px", backgroundColor: "black" }}
      >
        <div className="card-body text-center" style={{ color: "var(--primary-color)" }}>
          <img
            src={oneTon}
            alt="One Ton Bakkie"
            className="card-img-top"
            style={{ width: "200px", height: "150px" }}
          />
          <h2 className="card-title">Smart 2</h2>
          <div className="card-text">
            Trucks weighing from 1 tons to 2 tons. Best for furniture and other medium-weighted items
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>

      <div
        className="card service-hover"
        style={{ width: "250px", borderRadius: "20px", backgroundColor: "black" }}
      >
        <div className="card-body text-center" style={{ color: "var(--primary-color)" }}>
          <img
            src={fourTon}
            alt="Four Ton Bakkie"
            className="card-img-top"
            style={{ width: "200px", height: "150px" }}
          />
          <h2 className="card-title">Leggo</h2>
          <div className="card-text">
            Trucks weighing from 2 tons to 4 tons. Can carry industrial tools and heavy weighted goods
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>

      <div
        className="card service-hover"
        style={{ width: "250px", borderRadius: "20px", backgroundColor: "black" }}
      >
        <div className="card-body text-center" style={{ color: "var(--primary-color)" }}>
          <img
            src={eightTon}
            alt="Eight Ton Bakkie"
            className="card-img-top"
            style={{ width: "200px", height: "150px" }}
          />
          <h2 className="card-title">Combo</h2>
          <div className="card-text">
            Trucks weighing from 4 tons to 8 tons. Can carry industrial tools and heavy weighted goods
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-primary">Order Now</button>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h2 className="text-center"><b>How it Works</b></h2>
    <Guide />
    <h2 className="text-center"><b>Become a Partner</b></h2>
    <Partner />
  </div>
</div>
  );
}

export default Services;
