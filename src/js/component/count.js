import React, { Component } from "react";
//include images into your bundle

//create your first component
// export function Home() {
// 	return <div className="" />;
// }

// export class App extends Component {
// 	// constructor(props) {
// 	// 	super(props);
// 	// 	this.state = {};
// 	// }
// 	state = { number: 5 };
// 	render() {
// 		return <h1>class component</h1>;
// 	}
// }

let seconds = 0;

export function Clock() {
	seconds++;
	let digitSix = Math.floor(seconds / 100000) + "";
	let digitFive = Math.floor(seconds / 10000) + "";
	let digitFour = Math.floor(seconds / 1000) + "";
	let digitThree = Math.floor(seconds / 100) + "";
	let digitTwo = Math.floor(seconds / 10) + "";
	let digitOne = Math.floor(seconds / 1) + "";

	return (
		<div className="container-fluid d-flex flex-row count justify-content-center pt-3">
			<p className="p-2 mx-2 px-4">
				<i className="fas fa-clock" />
			</p>

			<p className="p-2 mx-2 px-3">
				{digitSix.charAt(digitSix.length - 1)}
			</p>

			<p className="p-2 mx-2 px-3">
				{digitFive.charAt(digitFive.length - 1)}
			</p>

			<p className="p-2 mx-2 px-3">
				{digitFour.charAt(digitFour.length - 1)}
			</p>

			<p className="p-2 mx-2 px-3">
				{digitThree.charAt(digitThree.length - 1)}
			</p>

			<p className="p-2 mx-2 px-3">
				{digitTwo.charAt(digitTwo.length - 1)}
			</p>

			<p className="p-2 mx-2 px-3">
				{digitOne.charAt(digitOne.length - 1)}
			</p>
		</div>
	);
}
