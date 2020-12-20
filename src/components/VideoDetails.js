import React from "react";

const VideoDetails = ({ video }) => {
  return <div>{!video && video.snippet.title}</div>;
};

export default VideoDetails;
