function Header() {
    return (
        <div className="h-20 bg-zinc-800 px-4 sm:px-12 md:px-20 flex justify-between items-center text-lg">
            <div>
                <p>
                    <a href="/">KFB</a>
                </p>
            </div>
            <nav className="flex justify-between gap-8 sm:gap-12 md:gap-16">
                <p>
                    <a href="/about">About</a>
                </p>
                <p>
                    <a href="/projects">Projects</a>
                </p>
                <p>
                    <a href="https://kristoferfannar.github.io/cv">CV</a>
                </p>
            </nav>
        </div>
    );
}

export default Header;
