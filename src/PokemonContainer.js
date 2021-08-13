import React, { Component } from 'react';
import PokeList from './PokeList.js';
import LoadingSpinner from './Spinner.js';


class PokemonContainer extends Component {
    state = { data: [], loading: true, query: null, sortOrder: 'asc', page: 1, lastPage: 1 };
  
    componentDidMount() {
        this.fetchData();
    }
  
    fetchData = async () => {
      if (!this.state.loading) {
        this.setState({loading: true });
      }
  
      let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
      let searchParams = new URLSearchParams();
      searchParams.set('page', this.state.page);

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
    };
  
    prevPage = async () => {
       this.setState({ page: this.state.page - 1 });
    };
  
    goToLastPage = async () => {
       this.setState({ page: this.state.lastPage })
    };
  
    searchForPokemon = async () => {
       this.setState({ page: 1 })
    };
  
    render() {
      const { loading, sortOrder } = this.state;
      return(
            <>
                <div className="search-controls">
  
  
                <input onChange={this.updateQuery} type="text" placeholder="Search"></input>
                <select className="dropDown" defaultValue={sortOrder} onChange={this.updateSort}>
  
                      <option value="asc">Ascending</option>
                      <option value="desc">Descending</option>
  
                </select>
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
  
                   {loading && <LoadingSpinner/>}
                   
                   {!loading && (
                     
                     <section>
                         <br></br>
               
                         <PokeList pokemon={this.state.data} />
               
                     </section>
                       
                       
                       
                       )}
  
                    <span className="counter">

                        You Are Viewing Page 

                        {this.state.page}|

                        of | 
                        {this.state.lastPage}

                   </span>
                   <br></br><br></br><br></br>
                  
            </>
        );
      }
    }
    
    export default PokemonContainer;
    