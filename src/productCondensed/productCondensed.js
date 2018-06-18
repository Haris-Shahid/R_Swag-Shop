import React, { Component } from 'react';
import './productCondensed.css';
import DataServices from '../services/data-services';

let ds = new DataServices();

class ProductCondensed extends Component {

    constructor(props) {
        super(props);
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
    }

    render() {
        return (
            <li className="list-group-item pc-condensed" >
                <a onClick={() => this.removeProduct()} className="btn btn-outline-danger" >X</a>
                <p>{this.props.product.title} | <b>${this.props.product.price}</b></p>
            </li>
        );
    }
}

export default ProductCondensed;