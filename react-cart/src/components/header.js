import React from 'react'

class Header extends React.Component{
	render(){
		return (<div className="header">
				<ul>
					<li><a onclick="showList()">List</a></li>
					<li><a onclick="showAdd()">View</a></li>
					<li><a onclick="showEdit()">Add</a></li>
				</ul>
			</div>)

	}
}

export default Header

