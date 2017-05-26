import React from 'react';

// First we import some modules...
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


import Header from './header'
import Add from './add'
import Edit from './edit'
import List from './list'

class Container extends React.Component{
  render() {
    return (
      <div>
        <Header></Header>
        {this.props.children}
      </div>
    )
  }
}

class App extends React.Component{

	render(){
		return(<div>
				
				<Router  history={hashHistory} >
					<Route path="/" component={Container}>
						<IndexRoute  component={List}/>
				        <Route path="add" component={Add}/>
				        <Route path="edit" component={Edit}/>
			        </Route>
			  </Router>
			</div>

			)
	}

}

export default App;