import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const fetchMsg = async () => {
	const response = await fetch("/api/hello");
	return await response.text();
}

function App() {
	const [msg, setMsg] = useState("");

	useEffect(() => {
		fetchMsg().then(setMsg);
	}, [])

	return (
		<div className="App flex-col items-center">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React + TypeScript</h1>
			<p className="read-the-docs">
				{msg}
			</p>
		</div>
	);
}

export default App;
