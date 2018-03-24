import React, { Component } from 'react';
// import Panel from "../Panel";
import Search from "../Search";
import SearchResults from "../SearchResults";
import Saved from "../Saved";
import API from "../../utils/API";
  
class Home extends Component {
	state = {
		articles: [],
		search: {
			topic: "",
			startYear: "",
			endYear: ""
		}
	};

	// When this component mounts, search the NYT API for articles about weather as a default.
	componentDidMount() {
		API.search("weather", "2017", "2018")
			.then( data => this.setState({articles: data.data.response.docs}) )
			.catch(err => console.log(err));
	}
		
	render() {

		return (
			<div className="container" style={{'backgroundColor': 'whitesmoke'}}>
			<div className="jumbotron" style={{'backgroundColor': 'lightblue'}}>
				<p>Welcome, {this.props.auth.username}</p>
					<button className="btn btn-default" onClick = {this.props.handleLogout}>Log Out</button>
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>  New York Times Search</strong></h1>	
			</div>	
				<Search/>

				<SearchResults articles={this.state.articles} />	
			
				<Saved />	
			

		</div>
	);	
	}
		
}

export default Home;