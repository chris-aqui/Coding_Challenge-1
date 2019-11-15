import React, { Component } from 'react';
import './style.scss';

class Block extends Component {
	render() {
		return (
			<div className="card-body ">
				<div>
					<label for="data">Data</label>
					<input id="data" placeholder="Welcome to Blockchain Demo 2.0!" />
				</div>
				<div>
					<label for="previous-hash">Previous hash</label>
					<span id="previous-hash">
						000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf
					</span>
				</div>
				<div>
					<label for="hash">Hash</label>
					<span id="hash">000dc75a315c77a1f9c98fb6247d03dd18ac52632d7dc6a9920261d8109b37cf</span>
				</div>
				<div>
					<label for="nonce">Nonce</label>
					<input id="nonce" placeholder="604" />
				</div>
			</div>
		);
	}
}

export default Block;
