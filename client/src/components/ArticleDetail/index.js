import React from 'react';

const ArticleDetail = (props) => {
	return(
		<div>
			<tr><td>
				{props.title}
			</td><td>
				{props.date}
			</td><td>
				{props.url}
			</td><td>
				<button type = 'submit' className="btn btn-default" name = "save" onClick = {props.handleSubmit}>Save</button>
			</td></tr>
		</div>
	);
}

export default ArticleDetail;