import PropTypes from "prop-types";

import './Header.css';

function Header({ logo, name }) {
  return (
    <header className="Header">
      <img src={logo} alt={name} />
      <span>{name}</span>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Header;




// function Header(props) {
//     return (
//     <header className="Header">
//     <img src={props.logo} alt="Website Logo"></img>
//     <span>{props.webSiteName}</span>
//     </header>
//     );
//   }
  
//   export default Header;


