import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class HeaderCell extends Component{
	constructor(props){
		super(props);
		this.state ={
			width: this.props.cellData.width || "200"
		}
		this.resizeWidthDragHandler = this.resizeWidthDragHandler.bind(this);
		this.resizeWidthDragStart = this.resizeWidthDragStart.bind(this);
		this.resizeWidthDragEnd = this.resizeWidthDragEnd.bind(this);
	}

	getStyle(){
		return{
			width: this.props.cellData.width,
			display:'inline-block',
			float:'left',
			position:'relative',
			border:'1px solid #000',
			padding: '10px 5px',
			boxSizing:'border-box'
		}

	}
	getResizeStyle(){
		return{
	   		width: '5px',
		    position: 'absolute',
		    right: '0px',
		    height: '100%',
		    top: '0px',
		    cursor: 'col-resize'
		}
	}
	resizeWidthDragHandler(event){
		if(this.props.cellData.resize){
			let width = this.getWidthFromEvent(event);
			if(width){
				this.props.onResize(this.props.columnPosition, width, 'dragProgress');
			}
		}
	}
	resizeWidthDragStart(e){
		if (e && e.dataTransfer && e.dataTransfer.setData) 
			e.dataTransfer.setData('text', e.target.id);
	}
	resizeWidthDragEnd(event){
		let width = this.getWidthFromEvent(event);
		if(width){
			this.props.onResize(this.props.columnPosition, width, "dragEnd");
		}
	}
	getWidthFromEvent(event){
		let rightDistance,leftDistance;
		if(event.pageX){
			rightDistance = event.pageX;
		}
		leftDistance = ReactDOM.findDOMNode(this).getBoundingClientRect().left;
		return rightDistance - leftDistance;
	}
	onDragStart(dragPosition){
		console.log(dragPosition);
		if(this.props.draggable && this.props.columnReOrder && typeof this.props.columnReOrder === 'function'){
			this.props.columnReOrder("SOURCE_POSTITION", dragPosition)
		}
	}
	onDragEnd(event){
		console.log(event.target);
	}
	onDrop(dragPosition){
		console.log(dragPosition);
		if(this.props.draggable && this.props.columnReOrder && typeof this.props.columnReOrder === 'function'){
			this.props.columnReOrder("Target_POSTITION", dragPosition)
		}
	}
	onDragOver(event){
		event.preventDefault();
	}

	render(){

		return(
			<div className="grid-header-cell" 
			style={this.getStyle()} 
			draggable={this.props.draggable && this.props.cellData.draggable} 
			onDragStart={() => this.onDragStart(this.props.columnPosition)}
			onDrop={() => this.onDrop(this.props.columnPosition)}
			onDragOver={this.onDragOver}
			data-col-position={this.props.columnPosition}>

				<div className="grid-header-text">{this.props.cellData.name}</div>
				{
					this.props.cellData.resize ? 
					<div 
						draggable="true" 
						onDrag={this.resizeWidthDragHandler}
      					onDragStart={this.resizeWidthDragStart}
      					onDragEnd={this.resizeWidthDragEnd} 
      					style={this.getResizeStyle()}></div>
					: ""
				} 
			</div>
		)
	}
}
export default HeaderCell;