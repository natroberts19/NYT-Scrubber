import React from 'react';

const Search = (props) => {
	return(
	<div>
        <div className="panel-heading">
					<h3 className="panel-title"><strong><i className="fa fa-search"></i>  Find Articles</strong></h3>
		</div>
    <form>

      <div className="form-group">
          <label for="topic">Topic:</label>
          <input onChange={props.handleInputChange} value={props.search} type="text" className="form-control" id="search-term"  />
      </div>

      <div className="form-group">
          <label for="pwd">Number of Records to Retrieve:</label>
            <select className="form-control" id="num-records-select">
                <option value="1">1</option>
                <option value="5" selected>5</option>
                <option value="10">10</option>
            </select>
      </div>

      <div className="form-group">
            <label for="start-year">Start Year (Optional):</label>
              <input onChange={props.handleInputChange} value={props.search} type="text" class="form-control" id="start-year" />
      </div>

      <div className="form-group">
            <label for="end-year">End Year (Optional):</label>
              <input onChange={props.handleInputChange} value={props.search} type="text" className="form-control" id="end-year" />
      </div>

      <button onClick={props.handleFormSubmit} type="submit" className="btn btn-default" id="run-search">Search</button>

    </form>
    <p />
	</div>
	);
}

export default Search;