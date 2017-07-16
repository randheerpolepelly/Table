import React, {Component} from 'react';
import HeaderCell from './HeaderCell'
class GridHeader extends Component{
	constructor(props){
		super(props);

	}
	getHeaderCell(){
		let headerCell = [];
		if(this.props.columns && this.props.columns.length > 0){
			this.props.columns.map((val, index) => 
				{
					headerCell.push(
						<HeaderCell
							{...this.props}
							key = {index}
							columnPosition = {index}
							cellData = {val}
						/>
					)
				}
			)
		}
		return headerCell;
	}
	getStyle(){
		return{
			display:'inline-block',
			position:'relative',
			float:'left'

		}
	}
	render(){
		return(
			<div className="grid-header">
				<div className="grid-header-row" style={this.getStyle()}>
					<div className="Grid-header-content">
						{this.getHeaderCell()}
					</div>
					<div style={{clear:"both"}}></div>
				</div>
				<div style={{clear:"both"}}></div>

			</div>
		)
	}
}

export default GridHeader;

