import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PokeItem extends Component {
    render() {
        return (
            
            <ul className="turbo">
                  <Link to={`/pokemon/${this.props.data._id}`}>
                <h2>{ this.props.data.pokemon }</h2>

                <img src={ this.props.data.url_image } alt={"pokemon-pics"}/>
              
                </Link>

            </ul>
        );
    }
}

export default PokeItem;