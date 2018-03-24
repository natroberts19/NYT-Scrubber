import React from 'react';

const ArticleDetail = (props) => {
	if (!props.article) {
		return null;
	} 
	return(

		<tr>
			<td>
				{props.article.headline.main}
			</td>
			<td>
				{props.article.pub_date}
			</td>
			<td>
				{props.article.web_url}
			</td>
			<td>
				<button type = 'submit' className="btn btn-default" name = "save" onClick = {props.handleSubmit}>Save</button>
			</td>
		</tr>
		
	);
	
}

export default ArticleDetail;