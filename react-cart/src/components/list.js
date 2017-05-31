import React from 'react';
import cartModel from './model';

class List extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isLoading : false,items : []
		}
	}

	componentWillMount(){
		this.setState({isLoading:true})
		cartModel.get().then((items)=>{
			this.setState({isLoading:false,items:items})
		})
	}

	render(){
		window.a = cartModel;

		return <div className="list">
		{this.state.isLoading ? 'Fetching your items' : ''}
					{	
						this.state.items.map((model)=>{
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