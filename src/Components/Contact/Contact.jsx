import React from "react";

function Contact() {
  return (
    <div>
      <div className="display-1">
        Reach out to us, we value your <b>Inputs</b>
      </div>

      <div className="container-sm">
        <div className="row">
          <div className="col-xxl-4">
            <div
              className="card"
              style={{ background: "transparent", border: "none" }}
            >
              <div className="card-body">
                <div className="card-text" style={{ fontSize: "20px" }}>
                  We'd love to hear from you! Whether you have questions,
                  feedback, or just want to say hello, don't hesitate to reach
                  out. Your input is invaluable to us, and we're here to help in
                  any way we can. Drop us a message, and let's start a
                  conversation!
                </div>
              </div>
            </div>
          </div>

          <div className="col-xxl-8 p-3">
            <form
              style={{
                border: "2px solid white ",
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
                className="form-select-sm"
                style={{ marginTop: "20px" }}
              >
                <option value="" disabled selected>
                  Reason of Contact
                </option>
                <option value="Partner">Become a Partner</option>{" "}
                <option value="Complaint">Raise a complaint</option>{" "}
                <option value="Message">Write a Message</option>{" "}
              </select>
              <div className="mb-3" style={{marginTop : "10px"}}>
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
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
