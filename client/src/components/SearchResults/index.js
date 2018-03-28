import React from "react";
import ArticleDetail from "../ArticleDetail";

const SearchResults = (props) => {
    return (
      <table className="table">
          <thead>
            <tr>
              <th>Article Headline</th>
              <th>Date</th>
              <th>URL</th>
              <th>Save</th>
            </tr>
			    </thead>

          <tbody>  
            { props.articles 
              ? 
              props.articles.map( article => <ArticleDetail key={article._id} article={article} />)
              :
              'nothing'
            }                      
			    </tbody>
      </table>
    );
}


export default SearchResults;