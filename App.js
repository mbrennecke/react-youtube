import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import _ from "lodash";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";
import VideoListItem from "./components/VideoListItem";
const apiKey = 'AIzaSyBo5lcIs3nWYdAco0KuEVptSi_EevN5wok';

class App extends Component {
	
	state = {
		videos: [],
		selectedVideo: null,
	}
	
	componentDidMount() {
		this.runSearch('skyrim');
	}
	
	runSearch = term => {
		axios.get('https://www.googleapis.com/youtube/v3/search', {
			params: {
				key: apiKey,
				part: 'snippet',
				q: term,
				maxResults: 10
			}
		})
		.then(data => data.data.items)
		.then(videos => this.setState({videos, selectedVideo: videos[0]}))
		.catch(err => console.log(err));
	}
	
	onVideoSelect = video => {
		this.setState({ selectedVideo: video });
	}
	
  render() {
	  const debouncedSearch = _.debounce(this.runSearch, 600)
	  
    return (
      <Container>
		<Row>
			<Col className="text-center">
				<SearchBar runSearch={debouncedSearch}/>
			</Col>
		</Row>
		<Row>
			<Col md="9">
				<VideoDetail selectedVideo={this.state.selectedVideo}/>
			</Col>
			<Col md="3">
				<VideoList>
					{this.state.videos.map(
						video=><VideoListItem 
						video={video} 
						key={video.id.videoId} 
						onVideoSelect={this.onVideoSelect}
						/>
					)}
				</VideoList>
			</Col>
		</Row>
	  </Container>
    );
  }
}

export default App;
