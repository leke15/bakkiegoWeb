import React from 'react'
import hand from "../../Assets/images/get_app_img.png"
import driver from "../../Assets/images/driver.jpg"

function DownloadApp() {
  return (
    <div className="position-relative overflow-hidden">
      {/* Graphic background */}
      <div className="position-absolute w-100 h-100" style={{ left: 0, zIndex: -1 }}>
        <img src={driver} alt="background graphic" className="img-fluid w-100 h-50" style={{ objectFit: "cover" }} />
      </div>
      
      {/* Call to action texts and button as well as the image preview of the app */}
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="display-4">Get the Bakkiego App now! From all the google play app store</h2>
            <h5 className="my-4">Bakkiego is available on Google Playstore. Download now and experience delivery at a fair price.</h5>
            <a className="btn btn-primary btn-lg" href="https://play.google.com/store/apps/details?id=com.bakkiego.customer&pcampaignid=web_share">
              Get Bakkiego
            </a>
          </div>
          {/* App image preview */}
          <div className="col-md-4 d-flex justify-content-center align-items-center mt-4">
            <img src={hand} alt="App preview" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp