import React, {Component} from 'react';
import GridRow from './GridRow';

class GridBody extends Component{
	constructor(props){
		super(props);

	}
	getRows(){
		let rows= [];
		this.props.rows.map((row, index) => (
			rows.push(<GridRow
				row = {row}
				key = {index}
				rowPosition = {index}
				{...this.props}
			/>)
		))
		return rows;
	}
	render(){
		return(
			<div className="grid-main-body">
				{this.getRows()}
			</div>
		)
	}
}

export default GridBody;

