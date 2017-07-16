import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GridCell extends Component{
	constructor(props){
		super(props);
	}
	getStyle(){
		return{
			width:this.props.cellHeaderData.width + 'px' || 200,
			borderLeft: '1px solid #000',
			borderRight: '1px solid #000',
			display:'inline-block',
			float:'left',
			minHeight:this.props.rowHeight,
		    padding: '10px 5px',
			boxSizing:'border-box'
		}
	}
	shouldComponentUpdate(nextProps){
		if(nextProps.resizeStatus){
			return false;
		}
		return true;
	}
	render(){
		return(
			<div className="Grid-cell" style={this.getStyle()}>
				{this.props.cellData}
				
			</div>
		)
	}
}

GridCell.PropTypes = {
	width: PropTypes.number.isRequired,
	cellData: PropTypes.any.isRequired
}
export default GridCell;