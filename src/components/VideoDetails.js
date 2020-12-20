import React from "react";

const VideoDetails = ({ video: { id, snippet, thumbnails } }) => {
  if (!id) {
    return <div>loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe
          title={snippet.title}
          width="560"
          height="315"
          src={videoSrc}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{snippet.title}</h4>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
