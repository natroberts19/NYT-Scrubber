import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Jumbotron = (props) => {
	return(
		<div className="jumbotron" style={'background-color: #20315A ; color: white'}>
			<h1 className="text-center"><strong><i class="fa fa-newspaper-o"></i>New York Times Search</strong></h1>
		</div>
	);
}

export default Jumbotron;