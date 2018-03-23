import React from 'react';

const Search = (props) => {
	return(
	<div>
        <div className="panel-heading">
					<h3 className="panel-title"><strong><i className="fa fa-search"></i>  Find Articles</strong></h3>
		</div>
    <form>

      <div className="form-group">
          <h5>Topic:</h5>
          <input onChange={props.handleInputChange} value={props.value} type="text" className="form-control" id="search-term"  />
      </div>

      <div className="form-group">
          <h5>Number of Records to Retrieve:</h5>
            <select className="form-control" id="num-records-select">
                <option value="5" defaultValue>5</option>
            </select>
      </div>

      <div className="form-group">
            <h5>Start Year:</h5>
              <input onChange={props.handleInputChange} value={props.value} type="text" className="form-control" id="start-year" />
      </div>

      <div className="form-group">
            <h5>End Year:</h5>
              <input onChange={props.handleInputChange} value={props.value} type="text" className="form-control" id="end-year" />
      </div>

      <button onClick={props.handleFormSubmit} type="submit" className="btn btn-default" id="run-search">Search</button>

    </form>
    <p />
	</div>
	);
}

export default Search;