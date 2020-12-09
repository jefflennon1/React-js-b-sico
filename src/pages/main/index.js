import React, { Component } from 'react';
import Api from '../../services/Api';
import './styles.css'


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
  }

  render(){
    const { products } = this.state;

   return (
     <>
      <div>
          {products.map(product => 
          (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            <a href="">Acessar</a>
          </article>
          )
          )}
          <div className="actions">
            <button onClick={this.pervPage}>Anterior</button>
            <button onClick={this.nextPage}>Próxima</button>
          </div>
      </div>
     </>
   )
  } 
}