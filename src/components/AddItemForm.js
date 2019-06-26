import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserInput extends Component {

	state = {
		title: ''
	}

	handleTitleChange = (e) => {
		let title = e.target.value;
		this.setState({
			title: title
		});
	}

	handleFormSubmit = (e) => {
		e.preventDefault();
		let title = this.state.title.trim();
		if (!title) {
			return;
		}
		this.props.onAddItem({ title: title });
		this.setState({
			title: ''
		});
	}

	render() {
		return (
			<form className="input-group input-group-lg" onSubmit={ this.handleFormSubmit }>
				<input
					type="text"
					placeholder="List Item"
					className="form-control"
					value={ this.state.title }
					onChange={ this.handleTitleChange }
				/>
				<div className="input-group-append">
					<input
						type="submit"
						value="Add Item"
						className="btn btn-primary btn-lg"
					/>
				</div>
			</form>
		);
	}
}

UserInput.propTypes = {
	onAddItem: PropTypes.func.isRequired,
};

export default UserInput;
