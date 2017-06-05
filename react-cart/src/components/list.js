import React from 'react';
import { connect } from 'react-redux'
import * as action from '../action'


class List extends React.Component{

	render(){
		window.a = cartModel;

		return <div className="list">
					{
						cartModel.get().map((model)=>{
							return <div>
										<h5>{model.name}</h5>
										<b>{model.price}</b>
										<hr/>
										{model.category}
									</div>
					})
					}
					
				</div>	

	}
}


export default List;
function mapStateToProps(state){
	return {
		items : state
	}
}

export default connect(
  mapStateToProps,
  { ...action }
)(List)



