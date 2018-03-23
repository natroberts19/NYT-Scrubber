import React, { Component } from "react";
import Search from "./Search";
import ArticleDetail from "./ArticleDetail";
import Results from "./Results";
import API from "../utils/API";

class SearchResults extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the NYT API for articles about weather as a default.
  componentDidMount() {
    this.searchNYT("weather");
  }

  searchNYT = query => {
    API.search(query)
      .then(res => this.setState({ results: res.data }))
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
          value={this.state.value}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Results results={this.state.results} 
        
        {...state.result.Title
          ? <ArticleDetail 
              title={this.state.result.Title}
              date={this.state.result.Date}
              url={this.state.result.URL}
              save={this.state.result.Save}
            />
          : <h3>No Results to Display</h3>}
          />
          
      </div>
    );
  }
}

export default SearchResults;