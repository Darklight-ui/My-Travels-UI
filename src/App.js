/** @format */

import "./App.css";
import BodyComponent from "./components/BodyComponent";
import NavComponent from "./components/NavComponent";
import demo from "./components/db";

function App() {
	console.log(demo);
	const formdata = demo.map((data) => {
		return <BodyComponent key={data.id} data={data} />;
	});
	return (
		<div className='bg'>
			<NavComponent />
			{formdata}
		</div>
	);
}

export default App;
