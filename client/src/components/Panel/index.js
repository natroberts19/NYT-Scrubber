import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Panel = (props) => {
	return(

	<div className="panel panel-primary">
        <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa  fa-list-alt"></i>{"Need Title Here"}</strong></h3>
        </div>

        <div className="panel-body">

		<Search />
		<Results />
		<Saved />

		</div>
	</div>
	);
}

export default Panel;