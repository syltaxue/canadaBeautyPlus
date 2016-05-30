var React = require("react");
var Carousel = require('react-bootstrap').Carousel;
// var NavItem = require('react-bootstrap').NavItem;

var Picture = React.createClass({
	render: function() {
		var width = window.innerWidth;
		var height = 600;
		console.log(width);
		return (
			<div className = "navigator-carousel">
				<Carousel>
					<Carousel.Item>
						<img width={width} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/slider1.jpg"/>
						<Carousel.Caption>
							<h3>图片示例1</h3>
							<p>图片文字简介1，文字介绍1</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={width} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/slider2.jpg"/>
						<Carousel.Caption>
							<h3>图片示例2</h3>
							<p>图片文字简介2，文字介绍2</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img width={width} height={height} className="navigator-picture" alt="900x400" src="./../app/src/image/slider3.jpg"/>
						<Carousel.Caption>
							<h3>图片示例3</h3>
							<p>图片文字简介3，文字介绍3</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	},

});

module.exports = Picture;