import React from 'react'
import styles from"./Skills.module.css"
export default function Skills() {
  return (
    <>
     <div className='container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center vh-100 pages'>
  <p className='title'>MY SPECIALTY </p>
  <p className="headigpages">MY SKILLS</p>
   <p className="heading2">
    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia,
     put her initial into the belt and made herself on the way.
   </p>
     <div className='row'>
  <div className="col-md-6">
<h3 class= {`mb-2  ${styles.progressTitle}`}>Photoshop</h3>
  <div className={`${styles.progress} ${styles.progbar1}`}>
    <div className={`${styles.progressbars} ${styles.progrphoto}`} role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
 
  </div>
  </div>
    <div className="col-md-6">
<h3 class= {`mb-2  ${styles.progressTitle}`}>jQuery</h3>
  <div className={`${styles.progress} ${styles.progbar1}`}>
    <div className={`${styles.progressbars} ${styles.progQury}`} role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
 
  </div>
  </div>
    <div className="col-md-6">
<h3 className= {`mb-2  ${styles.progressTitle}`}>HTML5</h3>
  <div className={`${styles.progress} ${styles.progbar1}`}>
    <div className={`${styles.progressbars} ${styles.proghtml}`} role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
 
  </div>
  </div>
    <div className="col-md-6">
<h3 class= {`mb-2  ${styles.progressTitle}`}>CSS3</h3>
  <div className={`${styles.progress} ${styles.progbar1}`}>
    <div className={`${styles.progressbars}   ${styles.progcss}`} role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
 
  </div>
  </div>
   <div className="col-md-6">
<h3 class= {`mb-2  ${styles.progressTitle}`}>WordPress</h3>
  <div className={`${styles.progress} ${styles.progbar1}`}>
    <div className={`${styles.progressbars}   ${styles.progword}`} role="progressbar" style={{width: '70%'}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
 
  </div>
  </div>
   <div className="col-md-6">
<h3 class= {`mb-2  ${styles.progressTitle}`}>SEO</h3>
  <div className={`${styles.progress} ${styles.progbar1}`}>
    <div className={`${styles.progressbars}   ${styles.progseo}`} role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
 
  </div>
  </div>

     </div>
        </div>
  </>
  )
}
