import React from 'react'
import { Link, Links } from 'react-router-dom'
import personImg from "../../assets/Images/about-BgAkqdr2.jpg"
import styles from "./NavBar.module.css"
export default function NavBar() {
  return (
   <>

<nav className= {` side-nav-menu position-fixed  h-100 d-flex top-0 navbar-expand-lg navbar-light  ${styles.extrasidebar}`}>
  <div className="container-fluid container-fluid px-4 py-5 ">
   <div>
<div className={`${styles.perImage}`} ></div>
   <h1 className={`${styles.personalName}`}><a href='#'>Jackson Ford</a></h1>
   <p className={`${styles.fontnav}`} ><a href='#'>UI/UX/Designer</a> in Philippines</p>
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
      <ul className= {`navbar-nav navbar-nav text-center  mb-lg-0   flex-column ${styles.fontLi}`}>
      <li className= {` nav-item  ${styles.editLi}`}>
          <Link className="nav-link active " aria-current="page" to="/home">Home</Link>
        </li>
    <li className= {` nav-item  ${styles.editLi}`}>
          <Link className="nav-link p-2 " to="/about">About</Link>
        </li>
       <li className= {` nav-item  ${styles.editLi}`}>
          <Link className="nav-link p-2" to="/skills">Skills</Link>
        </li>
      <li className= {` nav-item  ${styles.editLi}`}>
          <Link className="nav-link p-2 " to="/experience">Experience</Link>
        </li>
        <li className= {` nav-item  ${styles.editLi}`}>
          <Link className="nav-link p-2 " to="/work">Work</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



    </>
  );
};

 