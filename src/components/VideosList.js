import React from "react";
import VideoItem from "./VideoItem";

const VideosList = ({ videos }) => {
  const renderdList = videos.map((video) => {
    return <VideoItem video={video} />;
  });

  return <div className="ui relaxed divided list">{renderdList}</div>;
};

export default VideosList;
