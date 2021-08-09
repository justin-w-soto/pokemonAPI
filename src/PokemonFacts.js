import React, { Component } from 'react';


class PokemonFacts extends Component {
    state = { data: {} };

    loadData = async () => {
        const { id } = this.props.match.params;
        const url = `https://pokedex-alchemy.herokuapp.com/api/pokedex/${id}`;
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ data });
    };

    componentDidMount() {
        this.loadData();
    }

    render() {

        let { id } = this.props.match.params;
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