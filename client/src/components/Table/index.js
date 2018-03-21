import React from 'react';
import "./style.css";

// gather other componets
//import otherComponent from "../otherComponent";

const Table = (props) => {
	return(
	<div className="table-responsive">
		<table className="table">
			<thead>
				<tr>
					<th>Article Headline</th>
					<th>Date</th>
					<th>URL</th>
					<th>{props.tableHeading}</th>
				</tr>
			</thead>
			<tbody>                         
			</tbody>
		</table>
	</div>
	);
}

export default Table;