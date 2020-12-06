import React, { Component } from 'react';
import Api from '../../services/Api';

export default class Main extends Component{

  state = {
    products:[],
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async ()=>{
    const res = await Api.get('/products');

     this.setState({products: res.data.docs});

    //  console.log(res.data.docs);
  }

  render(){
   return (
     <>
      <div>
          {this.state.products.map(product => <div key={product._id}>{product.title}  </div>)}
      </div>
     </>
   )
  } 
}