import React from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({ videoUrl, title }) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="aspect-w-16 aspect-h-9">
        <video 
          className="w-full h-full object-cover" 
          controls 
          src={videoUrl}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

VideoPlayer.propTypes = {
  videoUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default VideoPlayer;