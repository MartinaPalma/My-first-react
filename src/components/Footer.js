import { PropTypes } from "prop-types";
import './Footer.css'

// function Company(props) {
//   const today = new Date();
//     const date = today.getFullYear();
//         return(
//          <footer className="Footer">{date} &copy; {props.company}</footer>
//     )
//     }
  
//   export default Company;


function Footer({ company }) {
  return (
    <footer className="Footer">
      {new Date().getFullYear()} © {company}
    </footer>
  );
}

Footer.propTypes = {
  company: PropTypes.string.isRequired,
};

export default Footer;
