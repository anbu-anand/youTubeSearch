import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search YouTube Videos:</label>
            <input
              value={this.state.term}
              type="text"
              onChange={(e) => this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
