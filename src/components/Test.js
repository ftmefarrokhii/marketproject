
// import Carousel from 'react-bootstrap/Carousel';
import "./Test.css"

import lbs1 from '../images/lbs1.jpeg'
import lbs2 from '../images/lbs2.jpeg';
import lbs3 from '../images/lbs3.jpeg';
import React from 'react'
import Carousel from 'react-grid-carousel'

const Test =()=>{
return(
//     <div class="slideshow">           
//             <div >
//                 <Carousel fade>
//                 <Carousel.Item>
            //     <div className="image">
            //   <img
            //   // className="d-block w-100"
            //   src={lbs2}
            //   alt="second slide"/>
            // </div>
            // <div className="info">
            //   <span className="name">super shoebbbbbs</span>
            //   <span className="price">&75574</span>
            // </div>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <div className="image">
//               <img
//               // className="d-block w-100"
//               src={lbs2}
//               alt="second slide"/>
//             </div>
//             <div className="info">
//               <span className="name">super shoebbbbbs</span>
//               <span className="price">&75574</span>
//             </div>
//                     </Carousel.Item>
//                     <Carousel.Item>
//                     <div className="image">
//               <img
//               // className="d-block w-100"
//               src={lbs2}
//               alt="second slide"/>
//             </div>
//             <div className="info">
//               <span className="name">super shoebbbbbs</span>
//               <span className="price">&75574</span>
//             </div>
//                     </Carousel.Item>
//                     </Carousel>
                 
//                 </div>
        
//         </div>
<Carousel cols={5} rows={1} gap={3} loop showDots={true} className="carousel">
      <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs2} alt="second slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs2} alt="second slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs2} alt="second slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs2} alt="second slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs2} alt="second slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>       
      </Carousel.Item>
      <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs2} alt="second slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>       
      </Carousel.Item>
      <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs2} alt="second slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
      </Carousel.Item>
      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>





// npm install react-grid-carousel --legacy-peer-deps






    // <section class="pt-5 pb-5">
    // <div class="container">
    //     <div class="row">
    //     <div class="col-6">
    //         <h3 class="mb-3">Carousel cards title </h3>
    //     </div>
    //     <div class="col-6 text-right">
    //         <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
    //         <i class="fa fa-arrow-left"></i>
    //         </a>
    //         <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
    //         <i class="fa fa-arrow-right"></i>
    //         </a>
    //     </div>
    //     <div class="col-12">
    //         <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

    //         <div class="carousel-inner">
    //             <div class="carousel-item active">
    //             <div class="row">

    //                 <div class="col-md-4 mb-3">
    //                 <div class="card">
    //                     <img class="img-fluid" alt="100%x280" src={lbs1}/>
    //                     <div class="card-body">
    //                     <h4 class="card-title">Special title treatment</h4>
    //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

    //                     </div>
    //                     </div>
    //                 </div>
    //                 <div class="col-md-4 mb-3">
    //                 <div class="card">
    //                 <img class="img-fluid" alt="100%x280" src={lbs1}/>                       
    //                  <div class="card-body">
    //                     <h4 class="card-title">Special title treatment</h4>
    //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

    //                     </div>
    //                 </div>
    //                 </div>
    //                 <div class="col-md-4 mb-3">
    //                 <div class="card">
    //                 <img class="img-fluid" alt="100%x280" src={lbs1}/>  
    //                 <div class="card-body">
    //                     <h4 class="card-title">Special title treatment</h4>
    //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

    //                     </div>
    //                 </div>
    //                 </div>

    //             </div>
    //             </div>
    //             <div class="carousel-item">
    //             <div class="row">
                    
    //             <div class="col-md-4 mb-3">
    //                 <div class="card">
    //                     <div class="card-body">
    //                     <img class="img-fluid" alt="100%x280" src={lbs1}/>
    //                     <h4 class="card-title">Special title treatment</h4>
    //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

    //                     </div>

    //                 </div>
    //                 </div>
    //                 <div class="col-md-4 mb-3">
    //                 <div class="card">
    //                 <img class="img-fluid" alt="100%x280" src={lbs1}/>

    //                     <div class="card-body">
    //                     <h4 class="card-title">Special title treatment</h4>
    //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

    //                     </div>
    //                 </div>
    //                 </div>
    //                 <div class="col-md-4 mb-3">
    //                 <div class="card">
    //                 <img class="img-fluid" alt="100%x280" src={lbs1}/>        
    //                     <div class="card-body">
    //                     <h4 class="card-title">Special title treatment</h4>
    //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

    // </div>
    // </div>
    // </div>

    // </div>
    // </div>
    // <div class="carousel-item">
    // <div class="row">

    // <div class="col-md-4 mb-3">
    // <div class="card">
    // <img class="img-fluid" alt="100%x280" src={lbs1}/>
    //     <div class="card-body">
    // <h4 class="card-title">Special title treatment</h4>
    // <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

    // </div>

    // </div>
    // </div>
    // <div class="col-md-4 mb-3">
    // <div class="card">
    // <img class="img-fluid" alt="100%x280" src={lbs1}/>
    //     <div class="card-body">
    // <h4 class="card-title">Special title treatment</h4>
    //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

    //                     </div>
    //                 </div>
    //                 </div>
    //                 <div class="col-md-4 mb-3">
    //                 <div class="card">
    //                 <img class="img-fluid" alt="100%x280" src={lbs1}/>
    //                                         <div class="card-body">
    //                     <h4 class="card-title">Special title treatment</h4>
    //                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //                     </div>
    //                 </div>
    //                 </div>
    //             </div>
    //             </div>
    //         </div>
    //         </div>
    //     </div>
    //     </div>
    // </div>
    // </section>
    );
};
export default Test;
