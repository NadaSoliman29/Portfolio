import React from "react";
import styles from "./Experience.module.css";
export default function Experience() {
  return (
    <>
      <div className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center  pages">
        <p className="title">EXPERIENCE </p>
        <p className="headigpages">WORK EXPERIENCE</p>

        <div>
          <div className={`${styles.timeline}`}>
            <div className={`${styles.timelineitem}`}>
              <div className={`${styles.timelineicon}`}>
                <i className="fa-solid fa-pencil"></i>
              </div>
              <h2>
                <a href="#">Full Stack Developer </a>
                <span>2017-2018</span>
              </h2>
              <p>
                Tolerably earnestly middleton extremely distrusts she boy now
                not. Add and offered prepare how cordial two promise. Greatly
                who affixed suppose but enquire compact prepare all put. Added
                forth chief trees but rooms think may.{" "}
              </p>
            </div>
            <div className={`${styles.timelineitem}`}>
              <div className={`${styles.timelineicon} ${styles.red}`}>
                <i className="fa-solid fa-pencil"></i>
              </div>
              <h2>
                <a href="#">Front End Developer at Google Company </a>
                <span>2017-2018</span>
              </h2>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
            <div className={`${styles.timelineitem}`}>
              <div className={`${styles.timelineicon} ${styles.yellow}`}>
                <i className="fa-solid fa-pencil"></i>
              </div>
              <h2>
                <a href="#">System Analyst </a>
                <span>2017-2018</span>
              </h2>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
