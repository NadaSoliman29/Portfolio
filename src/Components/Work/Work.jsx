import React, { useState } from 'react'
import styles from"./Work.module.css"

export default function Work() {

  const [show, setShow] = useState(false)

  return (
<>
    <div className='container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center pages'>
  <p className='title'>MY WORK</p>
  <p className="headigpages">RECENT WORK</p>
   <div>
  <ul id='work' className="nav mb-3 " role="tablist">
    <li className="nav-item">
      <a id="tab-A" href="#pane-A" className={` nav-link  ${styles.newnav}`}  data-bs-toggle="tab" role="tab">Graphic Design</a>
    </li>
    <li className="nav-item">
      <a id="tab-B" href="#pane-B" className={` nav-link ${styles.newnav}`} data-bs-toggle="tab" role="tab">Apps</a>
    </li>
    <li className="nav-item">
      <a id="tab-C" href="#pane-C" className= {` nav-link ${styles.newnav}`} data-bs-toggle="tab" role="tab">SoftWare</a>
    </li>
  </ul>
 

<div id="content" className="tab-content" role="tablist">
   
    <div id="pane-A" className="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">
      <div className="card-header" role="tab" id="heading-A">
        <div className='row'>
       <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic1}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic2}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
        <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic3}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
        <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic4}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className= {` col-md-6 col-sm-12 ${styles.more}`} style={{ display: show ? 'block' : 'none' }}>
        <div className={`${styles.pics} ${styles.pic5}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className= {` col-md-6 col-sm-12 ${styles.more}`} style={{ display: show ? 'block' : 'none' }}>
        <div className={`${styles.pics} ${styles.pic6}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
      </div>
     <button  onClick={() => setShow(true)} type="button" className="showMoreButton btn btn-primary">
      Show More</button>
    </div>
    </div>
    <div id="pane-B" className=" tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
      <div className="card-header" role="tab" id="heading-B">
        <div className='row'>
       <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic1}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic2}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
        <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic3}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
        <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic4}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className= {` col-md-6  col-sm-12${styles.more}`} style={{ display: show ? 'block' : 'none' }}>
        <div className={`${styles.pics} ${styles.pic5}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className= {` col-md-6  col-sm-12${styles.more}`} style={{ display: show ? 'block' : 'none' }}>
        <div className={`${styles.pics} ${styles.pic6}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
      </div>
     <button  onClick={() => setShow(true)} type="button" className="showMoreButton btn btn-primary">
      Show More</button>
      </div>
      <div id="collapse-B" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-B">
        
      </div>
    </div>
    <div id="pane-C" className=" tab-pane fade" role="tabpanel" aria-labelledby="tab-C">
      <div className="card-header" role="tab" id="heading-C">
        <div className='row'>
       <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic1}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic2}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
        <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic3}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
        <div className='col-md-6 col-sm-12'>
        <div className={`${styles.pics} ${styles.pic4}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className= {` col-md-6 col-sm-12 ${styles.more}`} style={{ display: show ? 'block' : 'none' }}>
        <div className={`${styles.pics} ${styles.pic5}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
       <div className= {` col-md-6 col-sm-12 ${styles.more}`} style={{ display: show ? 'block' : 'none' }}>
        <div className={`${styles.pics} ${styles.pic6}`}>
          <div className={` pt-4  ${styles.cover}`}>
          <div className={`${styles.shadow1}`}>
           <h3>
            <a href='#'>Work 2</a>
           </h3>
             <span>Animation</span>
           <div className={`${styles.icons}`}>
            <span>
              <a href='#'>
                <i class="fa-solid fa-share-nodes"></i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-eye">
                  100
                </i>
              </a>
            </span>
             <span>
              <a href='#'>
                <i class="fa-regular fa-heart">
                  49
                </i>
              </a>
            </span>
           </div>
            </div>
          </div>
        </div>
       </div>
      </div>
     <button  onClick={() => setShow(true)} type="button" className="showMoreButton btn btn-primary">
      Show More</button>
      </div>
      <div id="collapse-C" className="collapse" data-bs-parent="#content" role="tabpanel" aria-labelledby="heading-C">
        <div className="card-body">[Tab content C]</div>
      </div>
    </div>
  </div>
  </div>
  
</div>


  


</>



  )
}
