import React from 'react'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'



class Header extends React.Component{
	render(){
		return (<div className="header">
				<ul>
					<li><Link to="/">List</Link></li>
					<li><Link to="/add">Add</Link></li>
					<li><Link to="/edit">Edit</Link></li>
				</ul>
			</div>)

	}
}

export default Header

