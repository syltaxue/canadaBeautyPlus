var React = require("react");
var DropDownMenu = require('material-ui/lib/drop-down-menu');
var menuItems = [
	{ payload: '1', text: '分类' },
	{ payload: '2', text: '类型1' },
	{ payload: '3', text: '类型2' },
	{ payload: '4', text: '类型3' },
	{ payload: '5', text: '类型4' }
];
var Navigator = React.createClass({
	render: function() {
		return (
			<div className = "navigator">
				<div className = "navigator-container">
					<div className= "col-sm-1"></div>
					<div className= "col-sm-10 navigator-container-content">
						<div className= "col-sm-2">
							<div className="navigator-logo left">Canada Beauty Plus LOGO</div>
						</div>
						<div className= "col-sm-10">
							<div className = "navigator-buttons">
								<div className = "navigator-buttons-button">首页</div>
								<div className = "navigator-buttons-button">关于我们</div>
								<div className = "navigator-buttons-button"><DropDownMenu menuItems={menuItems} /></div>
								<div className = "navigator-buttons-button"><DropDownMenu menuItems={menuItems} /></div>
								<div className = "navigator-buttons-button"><DropDownMenu menuItems={menuItems} /></div>
								<div className = "navigator-buttons-button"><DropDownMenu menuItems={menuItems} /></div>
							</div>
						</div>
					</div>
					<div className= "col-sm-1"></div>
				</div>
			</div>
		);
	},

});

module.exports = Navigator;