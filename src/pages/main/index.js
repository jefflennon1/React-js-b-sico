import React, { Component } from 'react';
import Api from '../../services/Api';

export default class Main extends Component{
  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async ()=>{
    const res = await Api.get('/products');

     console.log(res);
  }

  render(){
   return  <h1>Hello rocketseat</h1>
  } 
}