import "./Blog.css";
import Carousel from 'react-bootstrap/Carousel';
import lbs1 from './images/lbs1.jpeg';
import lbs2 from './images/lbs2.jpeg';
import lbs3 from './images/lbs3.jpeg';
const Blog = () =>{
    return(
        <section className="Blog">
            <div className="container">
            <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lbs1}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lbs2}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lbs3}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
            </div>

        </section>
    )
};

export default Blog;