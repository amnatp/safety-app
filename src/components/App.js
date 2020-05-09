import React from "react";
import logo from "../shared/images/logo.svg";
import "./App.css";
import Todo from "./Todo/Todo";
import Timer from "./Pomodoro/Timer";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
function App() {
	const appStyle = {
		color: "Red"
	};
	return (
		<div className="App">
			<Header title="my app" />
			<Timer />
			<Footer />
		</div>
	);
}

export default App;
