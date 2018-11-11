import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchBar extends Component {
	
	state = {
		term : ""
	}
	
	handleInputChange = e => {
		this.setState({term:e.target.value})
		this.props.runSearch(e.target.value)
	}
	
	render() {
		return (
			<Form>
				<FormGroup>
				<Label htmlFor="searchTerm" hidden>Search:</Label>
				<Input 
					type="text" 
					name="searchTerm" 
					id="searchTerm" 
					placeholder="Your search"
					onChange={this.handleInputChange}
					value={this.state.term}
				/>
				</FormGroup>
			</Form>
		)
	}
}
