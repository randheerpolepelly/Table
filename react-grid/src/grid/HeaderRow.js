import React, {Component} from 'react';
import HeaderCell from './HeaderCell';
class HeaderRow extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="HeaderRow">
				<HeaderCell>
				</HeaderCell>
			</div>

		)
	}
}

export default HeaderRow;