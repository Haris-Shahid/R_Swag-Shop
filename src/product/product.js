import React, { Component } from 'react';
import './product.css';
import DataServices from '../services/data-services';

let ds = new DataServices();

class Product extends Component {

    constructor(props) {
        super(props);
        this.onButtonClicked = this.onButtonClicked.bind(this);
    }

    onButtonClicked = () => {
ds.addWishListItem(this.props.product)
    }

    render() {
        return (
            <div className="card product" >
                <img className="card-img-top" alt="Product" src={this.props.product.imgUrl} ></img>
                <div className="card-block" >
                    <h4 className="card-title" >{this.props.product.title}</h4>
                    <p className="card-text" >Price: ${this.props.product.price}</p>
                    <a href="#" onClick={() => this.onButtonClicked()} className="btn btn-primary" >Add to Wishlist</a>
                </div>
            </div>
        );
    }
}

export default Product;