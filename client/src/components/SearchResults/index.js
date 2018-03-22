import React, { Component } from "react";
import "./style.css";
import Search from "./Search";
// import Results from "./Results";
import API from "../utils/API";

class SearchResults extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the NYT API for articles about weather.
  componentDidMount() {
    this.searchNYT("weather");
  }

  searchNYT = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the NYT API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchNYT(this.state.search);
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}


export default SearchResults;