import logoImg from '../images/image.jpg'
import classes from './MainHeader.css';

const MainHeader =()=>{
    return(
        <div className="imagemain">
            <img src={logoImg} alt="logo"></img>
        </div>
    )
}
export default MainHeader;
