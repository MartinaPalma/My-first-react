import './Footer.css'

function Company(props) {
  const today = new Date();
    const date = today.getFullYear();
        return(
         <footer>{date} &copy; {props.company}</footer>
    )
    }
  
  export default Company;
