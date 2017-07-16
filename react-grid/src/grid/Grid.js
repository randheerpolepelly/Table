import React, { Component} from 'react';
import GridHeader from './GridHeader';
import GridBody from './GridBody';

class Grid extends Component{
	constructor(props){
		super(props);
		this.state = {
			columns: this.props.columns || [],
			rows: this.props.rows || [],
			dragSource: "",
			containerWidth:"",
			resizeStatus: false
		}
		this.onResize = this.onResize.bind(this);
		this.columnReOrder = this.columnReOrder.bind(this);
		this.setContainerWidth = this.setContainerWidth.bind(this);
	}
	getStyle(){
		return{
			width: this.state.containerWidth ? this.state.containerWidth+'px' : '100%',
			position:'relative',
			overflowX:'auto'

		}
	}
	onResize(colPosition, width, status){
		let columns = Object.assign([], this.state.columns);
		let containerWidth = this.state.containerWidth;
		if(width > columns[colPosition].width){
			containerWidth = containerWidth + (width - columns[colPosition].width);
		}else{
			containerWidth = containerWidth - (columns[colPosition].width - width);
		}
		columns[colPosition].width = width;
		if(status === 'dragProgress'){
			this.setState({columns:columns, containerWidth:containerWidth, resizeStatus: true});
		}else if(arguments.length === 3 && arguments[2] === 'dragEnd'){
			this.setState({columns:columns, containerWidth:containerWidth, resizeStatus: false});
			if(this.props.onResize && typeof this.props.onResize === 'function'){
				this.props.onResize(columns[colPosition], width);
			}
		}

	}
	columnReOrder(desc, position){
		if(desc === 'SOURCE_POSTITION'){
			this.setState({dragSource: position});
		}else if(desc === 'Target_POSTITION'){
			let columns = Object.assign([], this.state.columns);
			let splicedObj = columns.splice(this.state.dragSource, 1, this.state.columns[position]);
			columns.splice(position, 1, splicedObj[0]);
			this.setState({columns:columns});
			if(this.props.onDragEnd && typeof this.props.onDragEnd === 'function'){
				this.props.onDragEnd(this.state.dragSource, position);
			}
		}
	}
	setContainerWidth(){
		let totalWidth = 0;
		this.state.columns.map(value => totalWidth = totalWidth + value.width);
		console.log(totalWidth);
		this.setState({containerWidth:totalWidth});
	}
	componentDidMount(){
		this.setContainerWidth();
	}
	render(){
		const gridContainerStyle= {width:'100%', overflow:'auto'};
		return(
			<div className="Grid-container" style={gridContainerStyle}>
				<div className="grid-main"  style={this.getStyle()}>
					<GridHeader 
						{...this.props}
						columns={this.state.columns}
						onResize = {this.onResize}
						columnReOrder={this.columnReOrder}
						setContainerWidth={this.setContainerWidth}
						rowHeight={this.props.rowHeight ? this.props.rowHeight : 30}

					/>
					<GridBody 
						columns={this.state.columns}
						rows={this.state.rows}
						resizeStatus={this.state.resizeStatus}
						onRowClick={this.props.onRowClick}
						rowHeight={this.props.rowHeight ? this.props.rowHeight : 30}
					/>
				</div>
			</div>
		)
	}
}

export default Grid;