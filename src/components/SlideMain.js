import Carousel from 'react-bootstrap/Carousel';
import lbs1 from '../images/padmira1.jpg';
import lbs2 from '../images/padmira2.jpg';
import lbs3 from '../images/padmira3.jpg';

const SlideMain =()=>{
    return(
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={lbs1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={lbs2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={lbs3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                 
                </div>
            </div>
        </div>
    )
}
export default SlideMain;