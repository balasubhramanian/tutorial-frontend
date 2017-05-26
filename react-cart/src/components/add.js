import React from 'react';

class Add extends React.Component{

	render(){
		return (<div className="add-product">
					<div><label> Name </label> <input type="text" /></div>
					<div><label> Price </label> <input type="number" /></div>
					<div><label> Category </label> <select><option>Electronic</option><option>Mobile</option></select></div>
					<div><label> Active </label> <input type="checkbox" /></div>
					<div><button type="submit">Add</button><a>Cancel</a></div>

				</div>
			)
	}

}

export default Add;