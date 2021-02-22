function NavBar() {
    return (
        <nav className="navbar bg-dark navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Projects">Projects</a>
                </li>
        </nav>
    )
};

export default NavBar;

