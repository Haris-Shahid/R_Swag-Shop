import React, { Component } from 'react';
import './product.css';
import DataServices from '../services/data-services';
import NotificationServices, { NOTIF_WISHLIST_CHANGED } from '../services/notificationServices';

let ds = new DataServices();
let ns = new NotificationServices();

class Product extends Component {

    constructor(props) {
        super(props);
        this.onButtonClicked = this.onButtonClicked.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
        this.state = {
            onWishList: ds.itemOnWishList()
        }
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList) {
        this.setState({
            onWishList: ds.itemOnWishList(this.props.product)
        })
    }

    onButtonClicked = () => {
        if (this.state.onWishList) {
            ds.removeWishListItem(this.props.product)
        } else {
            ds.addWishListItem(this.props.product)
        }
    }

    render() {

        var btnClass;
        if (this.state.onWishList) {
            btnClass = "btn btn-danger"
        } else {
            btnClass = "btn btn-primary"
        }

        return (
            <div className="card product" >
                <img className="card-img-top" alt="Product" src={this.props.product.imgUrl} ></img>
                <div className="card-block" >
                    <h4 className="card-title" >{this.props.product.title}</h4>
                    <p className="card-text" >Price: ${this.props.product.price}</p>
                    <a href="#" onClick={() => this.onButtonClicked()} className={btnClass} >{this.state.onWishList ? "Remove From WishList" : "Add to Wishlist"}</a>
                </div>
            </div>
        );
    }
}

export default Product;