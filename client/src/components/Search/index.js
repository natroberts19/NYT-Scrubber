import React, {Component} from 'react';

class Search extends Component {
  state= {
      topic: '',
      startYear: '',
      endYear: ''
  }
  handleInputChange = (event) => {
		const {name, value} = event.target;    
        // Set the state for the appropriate input field.
		this.setState({
			[name] : value
		});
	}
  render() {
    return(
      <div>
            <div className="panel-heading">
              <h3 className="panel-title"><strong><i className="fa fa-search"></i>  Find Articles</strong></h3>
        </div>
        <form onSubmit={(event) => this.props.handleFormSubmit(event, this.state.topic, this.state.startYear, this.state.endYear)}>

          <div className="form-group">
              <h5>Topic:</h5>
                  <input value={this.state.topic} onChange={this.handleInputChange} name="topic" type="text" className="form-control" />
          </div>

          <div className="form-group">
                <h5>Start Year:</h5>
                  <input value={this.state.startYear} onChange={this.handleInputChange} name="startYear" type="text" className="form-control" />
          </div>

          <div className="form-group">
                <h5>End Year:</h5>
                  <input value={this.state.endYear} onChange={this.handleInputChange} name="endYear" type="text" className="form-control" />
          </div>

          <button type="click" className="btn btn-default" name="/search">Search</button>

        </form>
        <p />
      </div>
      );
      }
}

export default Search;