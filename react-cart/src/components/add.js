import React from 'react';
import cartModel from './model'
class Add extends React.Component{

	constructor(props) {
    	super(props);
    	this.state = {};
	}

	add(){
		
		cartModel.save({
			name : this.refs.name.value,
			price : this.refs.price.value,
			category : this.refs.category.value
		});
		this.clearForm();
		this.showMessage();
	}

	showMessage(){
		this.setState({msg : 'Saved your Item'})
	}

	clearForm(){
		this.refs.name.value = '';
		this.refs.price.value ='';
		this.refs.category.value = '';
	}
	//use arrow function to get the currenct context in onClick
	render(){
		return (<div className="add-product">
					{this.state.msg ? <div className="msg">{this.state.msg}</div> : <div/>}
					<div><label> Name </label> <input type="text" ref="name" /></div>
					<div><label> Price </label> <input type="number" ref="price" /></div>
					<div><label> Category </label> <select ref="category" ><option>Electronic</option><option>Mobile</option></select></div>
					<div><label> Active </label> <input type="checkbox" /></div>
					<div><button type="submit" onClick={(e) => this.add(e)}>Add</button><a>Cancel</a></div>

				</div>
			)
	}

}

export default Add;