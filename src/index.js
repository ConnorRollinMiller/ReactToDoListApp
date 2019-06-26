import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './components/ToDoContainer';

const App = () => (
	<div>
		<ToDoContainer
			apiUrl='http://localhost:5000/listItems'
			pollInterval={ 2000 }
		/>
	</div>
);

export default App;

ReactDOM.render(
	<App />,
	document.querySelector('#app')
);
