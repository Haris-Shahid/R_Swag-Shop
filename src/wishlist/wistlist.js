import React, { Component } from 'react';
import './wishlist.css';
import ProductCondensed from '../productCondensed/productCondensed';

class WishList extends Component {
    constructor(props) {
        super(props);
        this.createWishList = this.createWishList.bind(this);
        this.state = {
            wishList: [
                {
                    title: "Bologna killer",
                    price: 23.99,
                    _id: 'sdklfcslkf'
                },
                {
                    title: "killer",
                    price: 23.99,
                    _id: 'sdsadvslfcslkf'
                },
                {
                    title: "Bol killer",
                    price: 23.99,
                    _id: 'sdadkjncnlknalkf'
                }
            ]
        }
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id} />
        )
        return list;
    }

    render() {
        return (
            <div className="card" >
                <div className="card-block" >
                    <h4 className="card-title" >Wish List</h4>
                    <ul className="list-group" >
                        {
                            this.createWishList()
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default WishList;