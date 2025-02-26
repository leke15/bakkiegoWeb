import React from "react";
import ceo from "../../Assets/images/ceo.jpg";
import "./about.css";

function About() {
  return (
    <div>
      <div className="display-1 container-xxl">
        <h1>
          Let me introduce you to an <b>IDEA</b>
        </h1>
      </div>
      <div className="m-5">
        <p>
          Moving goods, personal items, or merchandise is always a hassle and
          the current solutions provided are not helping but are becoming a
          problem as well. Bakkiego comes in between bridging the current
          inefficient solutions and the problem of hassle movement with the
          number one solution South Africa acknowledges as the "informal
          alternative",BAKKIES, we all know they are flexible, tenacious, and
          always ready to help. Not only are we involving the local working
          community of these amazing movers but we are giving them a platform to
          extend their services by using their trucks which we all know and
          trust connecting formal or informal uses for a price both parties can
          agree on by themselves.
        </p>
      </div>
      <h1>Our Team</h1>
      <div className="container-sm">
        <div className="row ">
          <div className="col-xxl-4 col-lg-3 col-sm-2">
            <div
              className="card"
              style={{ border: "none", background: "transparent" }}
            >
              <img
                src={ceo}
                alt="ceo img"
                className="card-img-top rounded-circle"
                style={{ width: "200px" }}
              />
              <div className="card-body">
                <div className="card-text">David Ayomidotun</div>
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-3 col-sm-2">
            <div
              className="card"
              style={{ border: "none", background: "transparent" }}
            >
              <img
                src={ceo}
                alt="ceo img"
                className="card-img-top rounded-circle"
                style={{ width: "200px" }}
              />
              <div className="card-body">
                <div className="card-text">David Ayomidotun</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
