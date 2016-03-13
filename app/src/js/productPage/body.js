var React = require('react');
var ReactDOM = require('react-dom');
var Picture = require('./../shared/Picture');
var Product = React.createClass({
	render: function() {
		return (
			<div className = "productContainer">
				<div id ="bodyContext">
					<div className = "row">
						<div className = "col-sm-1"></div>
						<div className = "col-xs-12 col-sm-10">
							<div className="ui right rail"></div>
							<div className="product-description">Product1 文字介绍</div>
							<div className='product-picture'><Picture/></div>
						</div>
						<div className = "col-sm-1"></div>
					</div>
				</div>
			</div>
		);
	}

});

module.exports = Product;
