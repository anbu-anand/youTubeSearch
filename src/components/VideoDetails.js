import React from "react";

const VideoDetails = ({ video: { id, snippet, thumbnails } }) => {
  if (!id) {
    return <div>loading...</div>;
  }
  return <div>{snippet.title}</div>;
};

export default VideoDetails;
