var React = require("react");
var ProductItem = require("./../components/productItem");

var Body = React.createClass({
	getInitialState: function() {
		return {
			loadingMoreItem: false,
			numberOfProducts: 10
		};
	},

	componentDidMount: function() {
		// Have the navigator stick to the page while scrolling
		$('.ui.sticky')
			.sticky({
				bottomOffset: 50,
				context: '#bodyContext'
		});
	},

	render: function() {
		return (
			<div id ="bodyContext">
				<div className = "row">
					<div className = "col-sm-1">
					</div>
					<div className = "col-xs-12 col-sm-10">
						<div className="ui right rail">
							<div className = "ui bound bottom sticky">
								<button className="ui icon button" onClick={this.scrollToTop}>
									<i className="arrow up icon"></i>
								</button>
							</div>
						</div>
						<div className = "body">
							<div className = "body-container">
								<div className = "body-recommendText">店主推荐</div>
								<div className = "body-products">
									{this.renderProducts()}
								</div>
								<div className = "body-loadMoreBtn">
									{this.renderLoadMoreBtn()}
								</div>
							</div>
						</div>
					</div>
					<div className = "col-sm-1">
					</div>
				</div>
			</div>
		);
	},

	scrollToTop: function() {
		window.scrollTo(0, 0);
	},

	renderLoadMoreBtn: function() {
		if (this.state.loadingMoreItem) {
			return (
				<button className="ui loading button" id="loadMoreBtn">Loading</button>
			);
		} else {
			return (
				<button className="ui button" id="loadMoreBtn" onClick={this.loadMoreProducts}>点击加载更多</button>
			);
		}
	},

	renderProducts: function() {
		var arrayContainer = Array.apply(null, Array(this.state.numberOfProducts)).map(function () {});
		var products = arrayContainer.map(function(item, index) {
			return (
				<ProductItem id={index} key={index}/>
			);
		});

		var renderComponents = (
			<div className = "body-products">
				{products}
			</div>
		);

		return products;
	},

	loadMoreProducts: function() {
		this.setState({
			loadingMoreItem: true,
			numberOfProducts: this.state.numberOfProducts + 10
		});


	setTimeout(function(){
		this.setState({
			loadingMoreItem: false
		});
	}.bind(this), 1000);
	}
});

module.exports = Body;
