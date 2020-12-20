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

  onSearchForm = async (term) => {
    const results = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: results.data.items
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
        <VideoDetails video={this.state.selectedVideo} />
        <VideosList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
