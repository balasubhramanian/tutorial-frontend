import React from 'react';
import cartModel from './model';

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