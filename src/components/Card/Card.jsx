import React, { Component } from 'react';
import './style.scss';

class Card extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header card-header-text">
						<div className="card-text">
							<h4 className="card-title">Here is the Text</h4>
						</div>
					</div>
					<div className="card-body">
						The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
						"Naviglio" where you can enjoy the main night life in Barcelona...
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
