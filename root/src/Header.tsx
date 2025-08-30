function Header() {
	return (
		<div className="h-20 bg-zinc-800 px-24 flex justify-between items-center text-lg">
			<div>
				<p>
					<a href="/">KFB</a>
				</p>
			</div>
			<div className="flex justify-between gap-16">
				<p>
					<a href="/about">About</a>
				</p>
				<p>
					<a href="/projects">Projects</a>
				</p>
				<p>
					<a href="https://kristoferfannar.github.io/cv">CV</a>
				</p>
			</div>
		</div>
	);
}

export default Header;
