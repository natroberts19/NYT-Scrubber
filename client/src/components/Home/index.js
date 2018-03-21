import React from 'react';
import "./style.css";
// import Panel from "../Panel";
import Search from "../Search";
import Results from "../Results";
import Saved from "../Saved";

const Home = (props) =>{
	return (
		<div className="container">
			<div className="jumbotron" style={{'background-color': 'gray'}}>
				<p>Welcome, {props.auth.username}</p>
					<button className="btn btn-default" onClick = {props.handleLogout}>Log Out</button>
					<h1 className="text-center"><strong><i class="fa fa-newspaper-o"></i>  New York Times Search</strong></h1>	
			</div>	

			
				<Search />	
			
				<Results />	
			
				<Saved />	
			

		</div>
	);
}

export default Home;