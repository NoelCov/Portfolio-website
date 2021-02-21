function NavBar() {
    return (
        <nav className="navbar bg-dark">
            <ul className="nav justify-content-center">
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
            </ul>
        </nav>
    )
};

export default NavBar;