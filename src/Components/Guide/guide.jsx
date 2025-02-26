import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChampagneGlasses, faDownload, faImage } from "@fortawesome/free-solid-svg-icons";


function guide() {
  return (
    <div>
        <div className="container">
            <div className="card-group" style={{gap : "20px"}}>
                <div className="card text-center" style={{borderRadius: "10px", backgroundColor : "black" , color : "var(--primary-color)"}}>
                    <div className="card-header">
                    <FontAwesomeIcon icon={faDownload} style={{fontSize : "50px"}}/>
                    </div>
                    <div className="card-text">Download the app from your google play store or the app store and then Register</div>
                </div>

                <div className="card text-center" style={{borderRadius: "10px", backgroundColor : "black" , color : "var(--primary-color)"}}>
                    <div className="card-header">
                    <FontAwesomeIcon icon={faImage} style={{fontSize : "50px"}}/>
                    </div>
                    <div className="card-text">Take a picture of what you want to move, then put an offer to place your request.</div>
                </div>

                <div className="card text-center" style={{borderRadius: "10px", backgroundColor : "black" , color : "var(--primary-color)"}}>
                    <div className="card-header">
                    <FontAwesomeIcon icon={faChampagneGlasses} style={{fontSize : "50px"}}/>
                    </div>
                    <div className="card-text">Accept the driver of your choice and validate with your order OTP. Have a good trip!</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default guide