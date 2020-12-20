import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className="video-item item"
      key={video.id.videoId}
      onClick={() => onVideoSelect(video)}
    >
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
