import React from 'react'

import { PropTypes } from "prop-types";

import './Products.css';

class Products extends React.Component {
    
      render() {

        const { title, image , price } = this.props.product;
        return (
        <div className="products-container">
        <h5>{title}</h5>
        <img src={image} alt= "image"></img>
        <span>€{price}</span>
        </div>
        );
      }
    }

    Products.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    };
    
    export default Products