import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokeItem extends Component {
    render() {
        return (
            
            <ul className="turbo">

                <h2>{ this.props.data.pokemon }</h2>

                <img src={ this.props.data.url_image } alt={"pokemon-pics"}/>

            </ul>
        );
    }
}

export default PokeItem;