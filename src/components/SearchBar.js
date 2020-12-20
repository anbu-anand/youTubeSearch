import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
  }

  onFormSumbit = (e) => {
    e.preventDefault();
    this.props.onSearchForm(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSumbit}>
          <div className="field">
            <label>Search:</label>
            <input
              value={this.state.term}
              type="text"
              onChange={(e) =>
                this.setState({
                  term: e.target.value
                })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
