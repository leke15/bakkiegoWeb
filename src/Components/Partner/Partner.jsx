import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Partner() {
  return (
    <div>
      <h2>
        <b>What's in it for your business</b>
      </h2>
      <div className="container-sm">
        <div className="row">
          <div className="col-xxl-4">
            <ul class="list-group">
              <li class="list-group-item bg-transparent">
                <FontAwesomeIcon icon={faCircleCheck} />
                <b>Custom Made discounts</b>
              </li>
              <li class="list-group-item bg-transparent">
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} />
                <b>24/7 Customer Support</b>
              </li>
              <li class="list-group-item bg-transparent">
                {" "}
                <FontAwesomeIcon icon={faCircleCheck} />
                <b>Prioritized with top-rated drivers</b>
              </li>
            </ul>
          </div>

          <div className="col-xxl-8">
            <form
              style={{
                border: "2px solid white ",
                padding: "10px",
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
    </div>
  );
}

export default Partner;
