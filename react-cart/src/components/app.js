import React from 'react';
import Header from './header'
import Add from './add'
import Edit from './edit'
import List from './list'
class App extends React.Component{

	render(){
		return(<div>
				<Header></Header>
				<List></List>
				<Add></Add>
				<Edit></Edit>
			</div>

			)
	}

}

export default App;