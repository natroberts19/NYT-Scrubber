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
          <input value={props.topic} onChange={props.handleInputChange} name="topic" type="text" className="form-control" />
      </div>

      <div className="form-group">
            <h5>Start Year:</h5>
              <input value={props.startYear} onChange={props.handleInputChange} name="startYear" type="text" className="form-control" />
      </div>

      <div className="form-group">
            <h5>End Year:</h5>
              <input value={props.endYear} onChange={props.handleInputChange} name="endYear" type="text" className="form-control" />
      </div>

      <button onClick={props.handleFormSubmit} type="submit" className="btn btn-default" name="/search">Search</button>

    </form>
    <p />
	</div>
	);
}

export default Search;