import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos, onVideoSelect }) => {
  const renderdList = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderdList}</div>;
};

export default VideosList;
