var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./../shared/header');
var Navigator = require('./../shared/navigator');
var Picture = require('./../shared/Picture');
var Body = require('./body');
var Footer = require('./../shared/footer');
var Home = React.createClass({
	render: function() {
		return (
			<div id = "Home">
				<Header/>
				<Navigator/>
				<Picture/>
				<Body/>
				<Footer/>
			</div>
		);
	}
});

module.exports = Home;