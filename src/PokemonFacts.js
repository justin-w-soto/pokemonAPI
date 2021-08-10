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
        console.log(resp);
        const data = await resp.json();
        this.setState({ data });

    };


    render() {

        // let { id } = this.props.match.params;
        let { data } = this.state;

        return (

            <section>

                <h1>{data.pokemon}</h1>

                <div className="poke-facts">

                    <img src={data.url_image} alt="It's a Pokemon" />

                </div>

            </section>
        );
    }
}

export default PokemonFacts;