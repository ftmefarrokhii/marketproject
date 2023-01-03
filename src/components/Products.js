import "./Products.css";
import React from 'react';
import Carousel from 'react-grid-carousel';
import lbs4 from '../images/lbs2.jpeg';

const Products=()=>{
    return(
        <Carousel cols={5} rows={1} gap={5} loop showDots={true} autoplay={3000} arrowLeft={true}>
            <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
            </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
    
        {/* <Carousel.Item>
            <div className="itemm">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>super shoebbbbbs</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
         */}
        <Carousel.Item>
          {/* anything you want to show in the grid */}
        </Carousel.Item>
        {/* ... */}
      </Carousel>

    )
}
export default Products;