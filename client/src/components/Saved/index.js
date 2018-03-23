import React from 'react';
import Table from "../Table";

// gather other componets
//import otherComponent from "../otherComponent";

const Saved = (props) => {
	return(
		<div>
			<div className="row">
				<div className="col-sm-12">
					<br />
					<div className="panel panel-primary">
						<div className="panel-heading">
							<h3 className="panel-title"><strong><i className="fa fa-save"></i>  Saved Articles</strong></h3>
						</div>

						<Table tableHeading = "Delete" />
					
					</div>
				</div>
			</div>
			<p />
		</div>
	);
}

export default Saved;