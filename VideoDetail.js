import React, { Fragment } from 'react';

const VideoDetail = ({ selectedVideo }) => {
	if (!selectedVideo) {
		return <h3>Loading spinner</h3>
	}
	
	const videoId = selectedVideo.id.videoId;
	const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
	return (
		<Fragment>
			<div className="embed-responsive embed-responsive-16by9">
			  <iframe title={selectedVideo.snippet.title} className="embed-responsive-item" src={videoUrl} allowFullScreen></iframe>
			</div>
			<h2>{selectedVideo.snippet.title}</h2>
			<p>{selectedVideo.snippet.description}</p>
		</Fragment>
	)
}

export default VideoDetail;