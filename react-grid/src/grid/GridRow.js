import React, {Component} from 'react';
import GridCell from './GridCell';

class GridRow extends Component{
	constructor(props){
		super(props);
	}
	getCells(){
		let cells = [];
		this.props.columns.map((cellData, index) => (
			cells.push(
				<GridCell
					{...this.props}
					key = {index}
					cellData = {this.props.rows[this.props.rowPosition][cellData.id] ? this.props.rows[this.props.rowPosition][cellData.id] : ""}
					cellHeaderData = {cellData}
				/>	

			)
		))
		return cells;
	}
	getStyle(){
		return{
			borderBottom:'1px solid #000'

		}
	}
	render(){
		return(
			<div className="grid-row" style={this.getStyle()} onClick={()=>this.props.onRowClick(this.props.row, this.props.rowPosition)}>
				{this.getCells()}
				<div style={{clear:"both"}}></div>
			</div>

		)
	}
}
export default GridRow;