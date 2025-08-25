import mike from "./assets/IMG_9741.jpg";
import me from "./assets/tlps-2851.jpg";
// import "./App.css";

function App() {
	return (
		<div className="my-0 mx-auto p-12 text-center grow">
			<div className="flex justify-center">
				<img src={me} width={300} alt="Me" />
			</div>
			<h1 className="font-bold">Kristofer Fannar Bjornsson</h1>
		</div>
	);
}

export default App;
