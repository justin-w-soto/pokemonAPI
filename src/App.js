import { Component } from 'react';
import PokeList from './PokeList.js';
import './App.css';

class App extends Component {
  state = { data: [], loading: true, query: null, sortOrder: 'asc' };

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
      this.setState({ data: data.results, loading: false });
  };

  updateQuery = (e) => {
      this.setState({ query: e.target.value });
  };

  updateSort = (e) => {
    this.setState({ sortOrder: e.target.value });
};

  render() {
    const { loading, sortOrder } = this.state;
    return(
          <div>

              <h1> PoKeDeX PaRtY 😛 </h1> 


                <input onChange={this.updateQuery} type="text"></input>

                <button onClick={this.fetchData}>Search!</button>

                {loading && <h3> 🐌 PLEASE BE PATIENT, I MOVE SLOW 🐌 </h3>}

                {!loading && (

                    <section>
                      <br></br>

              <select className="dropDown" defaultValue={sortOrder} onChange={this.updateSort}>

                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>

              </select>
                      <PokeList pokemon={this.state.data} />

                  </section>
                    

                    
                )}

          </div>
      );
  }
}

export default App;


