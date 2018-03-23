import React from 'react';
// import Panel from "../Panel";
import Search from "../Search";
import SearchResults from "../Results";
import Saved from "../Saved";

const Home = (props) =>{
	return (
		<div className="container" style={{'backgroundColor': 'whitesmoke'}}>
			<div className="jumbotron" style={{'backgroundColor': 'lightblue'}}>
				<p>Welcome, {props.auth.username}</p>
					<button className="btn btn-default" onClick = {props.handleLogout}>Log Out</button>
					<h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>  New York Times Search</strong></h1>	
			</div>	

				<Search />

				<SearchResults />	
			
				<Saved />	
			

		</div>
	);
}

export default Home;