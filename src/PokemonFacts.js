import React, { Component } from 'react';


class PokemonFacts extends Component {
    state = { data: {} };
    
    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {
        const { id } = this.props.match.params;
        const url = ` https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ data });

    };


    render() {

        let { data } = this.state;

        return (

            <section>

                <h1>{data.pokemon}</h1>

                <div className="poke-facts">

                    <img src={data.url_image} alt="It's a Pokemon" />
                    <p>
                      <span> ATTACK: {this.state.data.attack} </span>
                      <span> DEFENSE: {this.state.data.defense} </span>
                      <span>  HP: {this.state.data.hp} </span>
                      <span>  TYPE: {this.state.data.type_1} </span>
                      <span>  TYPE 2: {this.state.data.type_2} </span>
                      <span>  HEIGHT: {this.state.data.height} </span>
                      <span>  WEIGHT: {this.state.data.weight} </span>
                    </p>

                </div>

            </section>
        );
    }
}

export default PokemonFacts;