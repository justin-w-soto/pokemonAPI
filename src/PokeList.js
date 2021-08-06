import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    render() {
        return (
            
            <ul>

                {this.props.pokemon.map((pokemon) => {
                    return <PokeItem data={ pokemon } key={ pokemon.id }/> 
                })}

            </ul>
        
        )
    }
}

export default PokeList;