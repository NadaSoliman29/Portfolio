import React from 'react'
import backGround1 from "../../assets/Images/img_bg_1.jpg"
import backGround2 from "../../assets/Images/img_bg_2.jpg"
import styles from "./Home.module.css"
export default function Home() {
  return (
    <>
 <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={1000}>
    <div className={`vh-100 d-flex flex-column justify-content-center  ${styles.slider1}`}>
    <div className= {`  container text-center text-md-start  ${styles.headslider}`}>
        <h1 className='text-lg-start text-center'>Hi! <br/>Im Jackson</h1>
        <p className='text-lg-start text-center'>100% html5 bootstrap templates Made <br/>  By 
        <a href='#'>Colorlib.com</a>
        </p>
        <button className='btn btn-transparent'>  DOWNLOAD CV
          <i className='fa-solid fa-download'></i>
        </button>
      </div>
    </div>
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
    <div className={`vh-100 d-flex flex-column justify-content-center  ${styles.slider2}`}>
    <div className= {`  container text-center text-md-start  ${styles.headslider}`}>
        <h1 className='text-lg-start text-center'>Hi! <br/>Im  a Designer</h1>
        <p className='text-lg-start text-center'>100% html5 bootstrap templates Made <br/>  By 
        <a href='#'>Colorlib.com</a>
        </p>
        <button className='btn btn-transparent'>   VIEW PORTFOLIO
          <i className='fa-solid fa-briefcase'></i>
        </button>
      </div>
    </div>
    </div>
    
  </div>
  
</div>

  </>
  )
}
