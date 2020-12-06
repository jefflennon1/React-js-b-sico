import React, {Component} from 'react';
import Api from '../../services/Api';

import './index.css'

export default class pagetwo extends Component{

  state = {
     product : []
  }

  componentDidMount(){
    this.findPageTwo();
  }
  
   findPageTwo = async ()=>{
    const response = await Api.get('/products?page=2');
      this.setState({ product : response.data.docs });
  }
  
  render(){
      return (
        <>
        {this.state.product.map( product => <h2 key={product._id}> {product.title}</h2> )}
        </>
      )
  }
}