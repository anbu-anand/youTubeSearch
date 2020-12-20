import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="item" key={video.id.videoId}>
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
      />
      <div className="content">
        <div className="header">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
