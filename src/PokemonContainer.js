import React, { Component } from 'react';
import PokeList from './PokeList.js';
import { BrowserRouter, Route, Switch, NavLink, Link } from 'react-router-dom';

class PokemonContainer extends Component {
    state = { data: [], loading: true, query: null, sortOrder: 'asc', page:1, lastPage: 1 };
  
    componentDidMount() {
        this.fetchData();
    }
  
    fetchData = async () => {
      if (!this.state.loading) {
        this.setState({loading: true });
      }
  
      let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
      let searchParams = new URLSearchParams();
  
      if (this.state.query) {
        searchParams.set('pokemon', this.state.query);
    }
  
      if (this.state.sortOrder) {
      searchParams.set('sort', 'pokemon');
      searchParams.set('direction', this.state.sortOrder);
  }
  
        url = url + `?${searchParams.toString()}`;
        let response = await fetch(url);
        let data = await response.json();
        let lastPage = Math.ceil(data.count / data.perPage);
        this.setState({ data: data.results, loading: false, lastPage });
    };
  
    updateQuery = (e) => {
        this.setState({ query: e.target.value });
    };
  
    updateSort = (e) => {
      this.setState({ sortOrder: e.target.value });
  };
  
    nextPage = async () => {
       this.setState({ page: this.state.page + 1 });
    }
  
    prevPage = async () => {
       this.setState({ page: this.state.page - 1 });
    }
  
    goToLastPage = async () => {
       this.setState({ page: this.state.lastPage })
    }
  
    searchForPokemon = async () => {
       this.setState({ page: 1 })
    }
  
    render() {
      const { loading, sortOrder } = this.state;
      return(
            <>
                <h1>Get yourself some Pokemon</h1>
  
                <div className="search-controls">
  
                <select className="dropDown" defaultValue={sortOrder} onChange={this.updateSort}>
  
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
  
                </select>
  
                  <input onChange={this.updateQuery} type="text"></input>
                  <button onClick={this.fetchData}>Search</button>
  
                  </div>
                    <div className="page-controls">
                    {this.state.page > 1 && (
                            <button onClick={this.prevPage}>Prev</button>
                        )}
                        {this.state.page < this.state.lastPage && (
                            <>
                                <button onClick={this.nextPage}>Next</button>
                                <button onClick={this.goToLastPage}>Last Page</button>
                            </>
                        )}
                    </div>
                  Page: {this.state.page}, 
                  of: {this.state.lastPage}
                 
  
                  {loading && <h3> 🐌 PLEASE BE PATIENT, I MOVE SLOW 🐌 </h3>}
  
                  {!loading && (
                    
                    <section>
                        <br></br>
  
                        <PokeList pokemon={this.state.data} />
  
                    </section>
                      
                      
                      
                      )}
  
            </>
        );
    }
  }
  
  export default PokemonContainer;
  