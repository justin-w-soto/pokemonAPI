import { Component } from 'react';
import PokeList from './PokeList.js';
import './App.css';

class App extends Component {
  state = { data: [], loading: true, query: null };

  componentDidMount() {
      this.fetchData();
  }

  fetchData = async () => {
      let url = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
      if (this.state.query) {
          url = url + `?pokemon=${this.state.query}`;
      }

      let response = await fetch(url);
      let data = await response.json();
      this.setState({ data: data.results });
  };

  updateQuery = (e) => {
      this.setState({ query: e.target.value });
  };


  render() {
    if(!this.state.loading) {

      return <h1>ERROR!</h1>
    }

    else{
      return (
          <div>

              <h1> PoKeDeX API 😛 </h1>
                <h3> Please be patient with me, I am slow.</h3>
              
                  <section className="body">
                      <input onChange={this.updateQuery} type="text"></input>
                      <br></br>
                      <button onClick={this.fetchData}>Gotta Catch 'em All!</button>
                      <PokeList pokemon={this.state.data} />
                  </section>
            

          </div>
      );
  }}
}
export default App;


