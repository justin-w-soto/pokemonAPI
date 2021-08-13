import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header.js';
import Home from './Home.js';
import PokemonFacts from './PokemonFacts.js';
import PokemonContainer from './PokemonContainer.js';
import './App.css';
import './Header.css';

class App extends Component {
  render() {
      return (
          <section className="app">

              <BrowserRouter>

                  <Header />
                        
                  <Switch>
                      <Route exact path="/" component={Home} />

                      <Route path="/pokemon/:id" component={PokemonFacts} />

                      <Route path="/pokemon" component={PokemonContainer} />


                  </Switch>

              </BrowserRouter>

          </section>
      );
  }
}
export default App;

