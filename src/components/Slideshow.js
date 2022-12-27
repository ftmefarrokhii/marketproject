import "./Slideshow.css"
// import Carousel from 'react-bootstrap/Carousel';
import lbs1 from '../images/slide1.jpg'
import lbs2 from '../images/slide2.jpg';
import lbs3 from '../images/slid3.jpg';
import arrow from '../images/right-arrow.png'

const handleLeftClick = (e) =>{
  e.preventDefault();
};
const handleRightClick = (e) =>{
  e.preventDefault();
};
const Slideshow = () =>{
    return(
            <div className="container">
            <div className="carousel">

       
          <div className="item">
            <div className="image">
              <img
              className="d-block w-100"
              src={lbs1}
              alt="First slide"/>
            </div>
            <div className="info">
              <span className="name">super shoes</span>
              <span className="price">&774</span>
            </div>
          </div>
       

      
          <div className="item">
            <div className="image">
              <img
              className="d-block w-100"
              src={lbs2}
              alt="second slide"/>
            </div>
            <div className="info">
              <span className="name">super shoebbbbbs</span>
              <span className="price">&75574</span>
            </div>
          </div>
        
 
          <div className="item">
            <div className="image">
              <img
              className="d-block w-100"
              src={lbs3}
              alt="third slide"/>
            </div>
            <div className="info">
              <span className="name">superrrrrr shoes</span>
              <span className="price">&77488</span>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <img
              className="d-block w-100"
              src={lbs2}
              alt="second slide"/>
            </div>
            <div className="info">
              <span className="name">super shoebbbbbs</span>
              <span className="price">&75574</span>
            </div>
          </div>

          <div className="item">
            <div className="image">
              <img
              className="d-block w-100"
              src={lbs2}
              alt="second slide"/>
            </div>
            <div className="info">
              <span className="name">super shoebbbbbs</span>
              <span className="price">&75574</span>
            </div>
          </div>
    </div>
            <div className="buttons">
              <button onClick={handleLeftClick}>
                <img src={arrow} style={{width:'20px'}} alt="scroll left"></img></button>
              <button onClick={handleRightClick}>
                <img src={arrow} style={{width:'20px'}} alt="scroll right"></img></button>

            </div>
      </div>

    )
};

export default Slideshow;

// return(
//   <section >
//       <div className="classs">
//       <div className="carousel">
//       <Carousel fade>
// <Carousel.Item>
 
//     <div className="item">
//       <div className="image">
//         <img
//         className="d-block w-100"
//         src={lbs1}
//         alt="First slide"/>
//       </div>
//       <div className="info">
//         <span className="name">super shoes</span>
//         <span className="price">&774</span>
//       </div>
//     </div>
//   >
// </Carousel.Item>
// <Carousel.Item>

//     <div className="item">
//       <div className="image">
//         <img
//         className="d-block w-100"
//         src={lbs2}
//         alt="second slide"/>
//       </div>
//       <div className="info">
//         <span className="name">super shoebbbbbs</span>
//         <span className="price">&75574</span>
//       </div>
//     </div>
  
// </Carousel.Item>
// <Carousel.Item>

//     <div className="item">
//       <div className="image">
//         <img
//         className="d-block w-100"
//         src={lbs3}
//         alt="third slide"/>
//       </div>
//       <div className="info">
//         <span className="name">superrrrrr shoes</span>
//         <span className="price">&77488</span>
//       </div>
//     </div>
 
// </Carousel.Item>
// </Carousel> 
// </div>
//       </div>

//   </section>
// )
// };

// export default Slideshow;