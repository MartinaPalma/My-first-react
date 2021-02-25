
import './Header.css';

function Header(props) {
    return (
    <header>
    <img src={props.logo} alt="Website Logo"></img>
    <span>{props.webSiteName}</span>
    </header>
    );
  }
  
  export default Header;


  