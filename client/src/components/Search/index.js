import React from 'react';
import "./style.css";
import Search from './Search';

// gather other componets
//import otherComponent from "../otherComponent";

const Search = (props) => {
	return(
	<div>
	<form role="form">

              <div className="form-group">
                <label for="search">Search Term:</label>
                <input type="text" className="form-control" id="search-term" />
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
                <input type="text" class="form-control" id="start-year" />
              </div>

              <div className="form-group">
                <label for="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year" />
              </div>

              <button type="submit" className="btn btn-default" id="run-search"><i class="fa fa-search"></i>Search</button>
              <button type="button" className="btn btn-default" id="clear-all"><i class="fa fa-trash"></i>Clear Results</button>

    </form>
	</div>
	);
}

export default Search;