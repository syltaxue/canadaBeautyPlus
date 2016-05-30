var React = require("react");
var Nav = require('react-bootstrap').Nav;
var NavDropdown = require('react-bootstrap').NavDropdown;
var MenuItem = require('react-bootstrap').MenuItem;
var NavItem = require('react-bootstrap').NavItem;

var Navigator = React.createClass({
	render: function() {
		return (
			<div className = "navigator navbar navbar-default">
				<div className = "navigator-container">
					<div className= "col-sm-1"></div>
					<div className= "col-sm-10 navigator-container-content">
						<div className= "col-sm-2">
							<div className="navigator-logo left">Canada Beauty Plus LOGO</div>
						</div>
						<div className= "col-sm-8">
							<div className = "navigator-buttons">
								<Nav justified bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
									<NavItem eventKey={1} href="/*">首页</NavItem>
									<NavItem eventKey={2} title="Item">关于我们</NavItem>
									<NavDropdown eventKey={3} title="保健品" id="nav-dropdown">
										<MenuItem eventKey="3.1">Action</MenuItem>
										<MenuItem eventKey="3.2">Another action</MenuItem>
										<MenuItem eventKey="3.3">Something else here</MenuItem>
										<MenuItem divider />
										<NavDropdown eventKey={3.4} title="Link" id="nav-dropright" noCaret={true} className="nav-dropDown-subMenu">
											<MenuItem eventKey="3.4.1">Action</MenuItem>
											<MenuItem eventKey="3.4.2">Another action</MenuItem>
											<MenuItem eventKey="3.4.3">Something else here</MenuItem>
											<MenuItem divider />
											<MenuItem eventKey="3.4.4">Separated link</MenuItem>
										</NavDropdown>
									</NavDropdown>
									<NavDropdown eventKey={4} title="母婴" id="nav-dropdown">
										<MenuItem eventKey="4.1">Action</MenuItem>
										<MenuItem eventKey="4.2">Another action</MenuItem>
										<MenuItem eventKey="4.3">Something else here</MenuItem>
										<MenuItem divider />
										<MenuItem eventKey="4.4">Separated link</MenuItem>
									</NavDropdown>
									<NavDropdown eventKey={5} title="护肤品" id="nav-dropdown">
										<MenuItem eventKey="5.1">Action</MenuItem>
										<MenuItem eventKey="5.2">Another action</MenuItem>
										<MenuItem eventKey="5.3">Something else here</MenuItem>
										<MenuItem divider />
										<MenuItem eventKey="5.4">Separated link</MenuItem>
									</NavDropdown>
									<NavItem eventKey={6} title="Item">联系我们</NavItem>
								</Nav>
							</div>
						</div>
						<div className= "col-sm-2">
						</div>
					</div>
					<div className= "col-sm-1"></div>
				</div>
			</div>
		);
	},

	handleSelect: function(eventKey) {
		event.preventDefault();
		console.log("selected", eventKey);
	}
});

module.exports = Navigator;