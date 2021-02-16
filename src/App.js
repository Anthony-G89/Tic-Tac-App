import { Component } from 'react';
import Title from "./components/Title";
import SearchPokemon from "./components/Search-Pokemon";
import CharacterDetail from "./components/CharacterDetail";
import './App.css';
import API from './utils/API';

class Pokemon extends Component {

  state = {
    search: "",
    results: []
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.searchPokemon(this.state.search);
    if (!this.state.search) {
      alert("please enter a Pokemon");
      window.location.reload();
      this.setState({
        search: ""
      });
    };
  };

  searchPokemon = PokemonSearched => {
    API.pokemonSearch(PokemonSearched)
      .then(res => this.setState({ results: res.data.result[0].properties}))
      .catch(err  => console.log(err));

  }

  render() {
    return (
      <div className="">
        <Title>Information on Pokemon's</Title>
        <SearchPokemon
        vaule={this.state.search}
        handleInputChange={this.handleInputChange}
        handleSubmitForm={this.handleSubmitForm} />

        <CharacterDetail
        name={this.state.results.name}
         birthYear={this.state.results.birth_year}
         eyeColor={this.state.results.eye_color}
         gender={this.state.results.gender}
         />
      </div>
    );
  }
}

export default Pokemon;
