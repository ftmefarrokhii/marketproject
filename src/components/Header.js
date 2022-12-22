import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Header =()=>{
    return(
        <div className="headerDiv">
        <nav className="navbar">
            <button>login</button>
            <h1 className="logoText">وست گالری</h1>
        </nav>
        </div>
    )
}

export default Header;