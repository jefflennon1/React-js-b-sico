import React, {Component} from 'react';
import api from '../../services/Api';

export default class Sites extends Component{
  state = {
    sites: [],
  }
  
  componentDidMount(){
    this.loadSites();
    this.render();
  }

  async loadSites(){
     const data = await api.get('/sites');
     const sites = data.data.docs;
    
     this.setState({ sites });
     
  }

  render(){
    return(
      <>
        {this.state.sites.map( site =>
           <div key={site._id}>
             <article>
              <label>Title of site:</label>
              <label>&nbsp;{site.name}</label>
            </article>
            <article>
              <label>Url:</label>
              <label>&nbsp;{site.url}</label>
            </article>
          </div>)}
      </>
    )
  }
};