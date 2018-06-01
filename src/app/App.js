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
      <div className="container App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-main" >
          <Product />
        </div>
      </div>
    );
  }
}

export default App;
