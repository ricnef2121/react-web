import React from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/Results';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact pact="/results" component={Results}/>
		    </Switch>
			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
