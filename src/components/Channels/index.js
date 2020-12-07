import React, {Component} from 'react';
import Api from '../../services/Api'
import './index.css'

export default class Channel extends Component {
  state ={
    channel:[]
  }
  componentDidMount(){
    this.getChannels();
  }

  async getChannels(){
     const channels = await Api.get('/canais');
      this.setState( {channel: channels.data} );
  }
  render(){
    return(
      <>
     <div>
       <h1>Canais que são grandes</h1>
      {this.state.channel.map( 
        channel => 
        <h3 key={channel._id}>Canal: {channel.name} 
            <div>Link: <span>{channel.url}</span></div> 
        </h3> 
        )}
    </div>
      </>
    )
 }
}
