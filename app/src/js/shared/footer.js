var React = require("react");


var Footer = React.createClass({
	render: function() {
		return (
			<div className = "footer">
				<div className = "footer-container">
					<div>©2015 canadaBeautyPlus.com 电信与信息业务经营许可证000000号 沪ICP备00000000号-1</div>
					<div>首页 | 商务合作 | 联系我们 | 地址：| 电话：</div>	
				</div>
			</div>
		);
	}
});

module.exports = Footer;