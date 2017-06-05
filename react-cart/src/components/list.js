import React from 'react';
import { connect } from 'react-redux'
import * as action from '../action'


class List extends React.Component{

	handleClick(){
		this.props.testAction();
	}
	render(){
		return (
				<div className="list">
				<button onClick={()=>{this.handleClick()}}>test action
				</button>
					{
						this.props.items.map((model)=>{
							return <div>
										<h5>{model.name}</h5>
										<b>{model.price}</b>
										<hr/>
										{model.category}
									</div>
					})
					}
					
				</div>	)

	}
}



function mapStateToProps(state){
	return {
		items : state
	}
}

export default connect(
  mapStateToProps,
  { ...action }
)(List)



