import React, { Component } from 'react';
import { Block } from '../Block';
import './style.scss';

class Card extends Component {
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header card-header-text">
						<div className="card-text">
							<h4 className="card-title">Genesis Block</h4>
						</div>
					</div>
					<Block />
				</div>
			</div>
		);
	}
}

export default Card;
