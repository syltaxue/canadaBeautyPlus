var React = require('react');
var render = require('react-dom').render;

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
// This library is for listening all the events for material-ui
var injectTapEventPlugin = require("react-tap-event-plugin");
var Main = require('./home/main');
var ProductPage = require('./productPage/main');
// injectTapEventPlugin();
render((
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="#" component={Main}/>
		</Route>
		<Route path="/product/:productId" component={ProductPage}/>
	</Router>
), document.getElementById("app"));