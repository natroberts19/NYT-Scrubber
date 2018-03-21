import React from 'react';
import "./style.css";
import Table from "../Table";

// gather other componets
//import otherComponent from "../otherComponent";

const Results = (props) => {
	return(
		<div>
			<div className="row">
				<div className="col-sm-12">
					<br />
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title"><strong><i className="fa fa-table"></i>  Top Articles</strong></h3>
						</div>

						<Table tableHeading = "Save" />
					
					</div>
				</div>
			</div>
			<p />
		</div>
		
	);
}

export default Results;