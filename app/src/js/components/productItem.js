var React = require("react");
var Link = require('react-router').Link

var ProductItem = React.createClass({
	render: function() {
		return (
			<div className = "productItem">
				<div className="productItem-picture"/>
				<div className="ui labeled button" tabIndex="0">
					<div className="ui red button">
						<i className="heart icon"></i> Like
					</div>
					<a className="ui basic red left pointing label">0</a></div>
				<Link to={`/product/${this.props.id}`}>link</Link>
			</div>
		);
	}
});

module.exports = ProductItem;