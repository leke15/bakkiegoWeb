import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "./homecontact.css";

function HomeContact() {
  return (
    <div className="comp-spacing">
      <div className="row">
        <div className="col-12 col-md-3">
          <div className="container">
            <div className="card text-center mb-3 hc-card-styles">
              <div className="card-body ">
                <a href="https://www.facebook.com/Bakkiegoapp/" style={{textDecoration : "none"}}>
                  <div>
                    <FontAwesomeIcon icon={faFacebook} />
                  </div>
                  <div>
                    <small>
                      bakkiego <br /> visit our profile
                    </small>
                  </div>
                </a>
              </div>
            </div>

            <div className="card text-center hc-card-styles">
              <div className="card-body">
                <div>
                  <FontAwesomeIcon icon={faSquareWhatsapp} />
                </div>
                <div>
                  <small>
                    bakkiego <br /> send a messsage
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-2">
          <div className="container"></div>
        </div>

        <div className="col-12 col-md-6">
          <form
            style={{
              border: "2px solid white",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                id="email-input"
                className="form-control"
                placeholder=" "
              />
              <label htmlFor="email-input" style={{ fontSize: "20px" }}>
                Email
              </label>
            </div>
            <select
              id="form-reason"
              className="form-select"
              style={{ marginTop: "20px" }}
            >
              <option value="" disabled selected>
                Reason of Contact
              </option>
              <option value="Partner">Become a Partner</option>
              <option value="Complaint">Raise a complaint</option>
              <option value="Message">Write a Message</option>
            </select>
            <div className="mb-3" style={{ marginTop: "10px" }}>
              <label htmlFor="form-reason" style={{ fontSize: "20px" }}>
                Your Message
              </label>
              <textarea
                id="contact-message"
                className="form-control"
                placeholder=" "
                rows={5}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeContact;
