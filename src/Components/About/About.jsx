import React from 'react'
import styles from "./About.module.css"

export default function About() {
  return (
    <>
  <div className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100 pages">

    <p className='title'>ABOUT US </p>
    <p className="headigpages">WHO AM I?</p>
    <p className="heading2"> <strong>Hi Im Jackson Ford</strong>  On her way she met a copy. The copy warned the Little Blind Text, 
    that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.</p>
    <p className="heading2">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
    <div className='row'>
    <div className='col-md-3'>
    <div className={`${styles.boxs} ${styles.box1}`}>
        <span className={`${styles.icons} ${styles.icon1}`}>
        <i class="fa-regular fa-lightbulb"></i>
        </span>
        <h3>Graphic Design</h3>
      </div>
    </div>
    <div className='col-md-3'>
    <div className={`${styles.boxs} ${styles.box2}`}>
        <span className={`${styles.icons} ${styles.icon2}`}>
        <i class="fa-solid fa-earth-africa"></i>
        </span>
        <h3>Web Design</h3>
      </div>
    </div>
    <div className='col-md-3'>
    <div className={`${styles.boxs} ${styles.box3}`}>
      <span className={`${styles.icons} ${styles.icon3}`}>
        <i class="fa-solid fa-database"></i>
        </span>
        <h3>Software</h3>
      </div>
    </div>
    <div className='col-md-3'>
    <div className={`${styles.boxs} ${styles.box4}`}>
    <span className={`${styles.icons} ${styles.icon4}`}>
        <i class="fa-solid fa-mobile-screen-button"></i>
        </span>
        <h3>Application</h3>
      </div>
    </div>
    

  </div>
  </div>
  
  </>
  )
}
