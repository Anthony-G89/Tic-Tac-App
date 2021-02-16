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
    this.starWarCharacterSearch(this.state.search);
    if (!this.state.search) {
      alert("please enter a character");
      window.location.reload();
      this.setState({
        search: ""
      });
    };
  };

  starWarCharacterSearch = starWarSearched => {
    API.starWarCharacterSearch(starWarSearched)
      .then(response => this.setState({ results: response.data.result[0].properties + console.log(response)}))
      .catch(err  => console.log(err));

  }

  render() {
    return (
      <div className="">
        <Title>Star Wars</Title>
        <SearchPokemon
        vaule={this.state.search}
        handleInputChange={this.handleInputChange}
        handleSubmitForm={this.handleSubmitForm} />

        <CharacterDetail
        url={this.state.results.url}
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
