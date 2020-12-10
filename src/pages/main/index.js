import React, { Component } from 'react';
import Api from '../../services/Api';
import './styles.css'


export default class Main extends Component{

  state = {
    products:[],
    productsInfo:{},
    page:1
  }

  componentDidMount(){
    this.loadProducts();
  }

  loadProducts = async (page = 1)=>{
    const response = await Api.get(`/products?page=${page}`);
    const { docs, ...productsInfo } = response.data;
    this.setState({ products: docs, productsInfo, page });
    console.log(page);
  }
  pervPage = ()=>{
    const { page, productsInfo } = this.state;
    if(page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  };
  nextPage = ()=>{
    const { page, productsInfo } = this.state;

    if(page === productsInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };
  render(){
    const { products, page, productsInfo} = this.state;

   return (
     <>
      <div>
          {products.map(product => 
          (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>
            {/* <a href="">Acessar</a> */}
          </article>
          )     
          )}
          <div className="actions">
            <button disabled={page === 1} onClick={this.pervPage}>Anterior</button>
            <button disabled={page === productsInfo.pages}  onClick={this.nextPage}>Próxima</button>
          </div>
      </div>
     </>
   )
  } 
}