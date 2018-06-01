import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HttpService from "../services/http-services";
import Product from '../product/product';

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.loadData();
  }

  loadData = () => {
    http.getProducts().then(products => {
      console.log(products)
    }, err => {

    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container App-main" >
          <div className="row" >
            <Product className="col-sm-4" price="4.23" title="Cool Troy Gun" imgUrl="https://s3-us-west-2.amazonaws.com/devslopesvideo/vault.JPG" />
            <Product className="col-sm-4" price="4.23" title="Cool Troy Gun" imgUrl="https://s3-us-west-2.amazonaws.com/devslopesvideo/vault.JPG" />
            <Product className="col-sm-4" price="4.23" title="Cool Troy Gun" imgUrl="https://s3-us-west-2.amazonaws.com/devslopesvideo/vault.JPG" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
