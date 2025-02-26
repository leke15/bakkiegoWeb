import React from 'react'
import HomeService from './HomeService'
import Features from './Features'
import DownloadApp from './DownloadApp'
import HomeContact from './HomeContact'
import homeImage from "../../Assets/images/movers.jpg"
import './home.css'

function Home() {
  return (
    <div>
      <div className="card ">
        <img src={homeImage} alt="Movers Image" className='card-img card-sizer' />
      <div className="card-body card-img-overlay">
        <div className='card-text home-title-text'>
        Move Your <br/>Goods <br/> Anywhere <br/> Anytime
        </div>
        <HomeService />
        </div>
      </div>
      <Features />
      <HomeContact />
      {/* <DownloadApp /> */}
    </div>
  )
}

export default Home