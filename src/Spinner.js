import React, { Component } from 'react';
import gif from './assets/pika.gif';

class LoadingSpinner extends Component {
    render() { 
        return ( 
            <div>
                <img src={gif} alt="loading symbol"/>
            </div>
         );
    }
}
 
export default LoadingSpinner;