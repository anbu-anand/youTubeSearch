import React from "react";
import SearchBar from "./SearchBar";
import VideosList from "./VideosList";
import VideoDetails from "./VideoDetails";
import youtube from "./youtube";
class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: []
  };

  componentDidMount() {
    this.onSearchForm("childrens");
  }

  onSearchForm = async (term) => {
    const results = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchForm={this.onSearchForm} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideosList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
