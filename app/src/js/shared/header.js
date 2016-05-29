var React = require("react");
var Link = require('react-router').Link;

var Header = React.createClass({
	getInitialState: function() {
		return ({active: 'home'});
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		if (this.props !== nextProps) return true;
		if (this.state && this.state.active !== nextState.active) return true;
		return false;
	},
	render: function() {
		var homeButtonState = this.state.active === 'home' ? ' active' : '';
		return (
			<div className = "header">
				<div className = "header-container">
					<div className= "row">
						<div className = "col-sm-1"></div>
						<div className = "col-xs-4 col-sm-3">
							<div className = "item" onClick={this._handleClick.bind(this, 'home')}>
								<Link className="header-buttons-text" to={'/'}>Canada Beauty Plus</Link>
							</div>
						</div>
						<div className = "col-xs-6 col-sm-5">
						</div>
						<div className = "col-xs-2 col-sm-2">
						</div>
						<div className= "col-sm-1"></div>
					</div>
				</div>
			</div>
		);
	},

	_onClickLogin: function() {
		window.alert("Login need to be implemented");
	},

	_onClickSearch: function() {
		window.alert("Search clicked");
	},
	_handleClick: function(type) {
		this.setState({active: type});
	}
});

module.exports = Header;