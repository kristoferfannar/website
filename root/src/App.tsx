import me from "./assets/tlps-2851.jpg";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import nginx from "react-syntax-highlighter/dist/esm/languages/hljs/nginx";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import conf from "../../nginx.conf?raw";

SyntaxHighlighter.registerLanguage("nginx", nginx);

function App() {
	const color = atomOneDark.hljs.background.toString();

	const colors = Object.keys(atomOneDark)
		.filter((key) => {
			return "color" in atomOneDark[key];
		})
		.map((key) => atomOneDark[key]["color"]);
	console.log(colors);

	const banner = () => {
		return (
			<div className="flex">
				<>
					{colors.map((color, i) => (
						<div
							key={i}
							className="grow h-2"
							style={{ backgroundColor: color }}
						/>
					))}
				</>
			</div>
		);
	};

	return (
		<>
			{banner()}
			<div className="my-0 p-12 text-center grow flex flex-col items-center">
				<div className="flex justify-center">
					<img src={me} width={300} alt="Me" />
				</div>
				<h1 className="font-bold">Kristofer Fannar Bjornsson</h1>
				<p className="mt-4">This is my website, welcome. </p>
				<div
					className="text-left p-4 rounded-2xl max-w-7xl"
					style={{ backgroundColor: color }}
				>
					<div className="hidden pl-2 pb-4 flex gap-2">
						<div className="h-4 w-4 bg-red-500" />
						<div className="h-4 w-4 bg-yellow-400" />
						<div className="h-4 w-4 bg-green-500" />
					</div>
					<SyntaxHighlighter
						language="nginx"
						style={atomOneDark}
						showLineNumbers
						customStyle={{ padding: 0 }}
						wrapLongLines
					>
						{conf}
					</SyntaxHighlighter>
				</div>
			</div>
			{banner()}
		</>
	);
}

export default App;
