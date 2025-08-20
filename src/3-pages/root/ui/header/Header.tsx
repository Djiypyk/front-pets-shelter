
const Header = () => {

    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="logo">
                        <img src="logo.png" alt="Pets Shelter Logo"/>
                        <span>Pets Shelter</span>
                    </div>

                    <nav className="nav">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                    </nav>

                    <a href="#" className="btn-signup">Sign Up</a>
                </div>
            </header>
        </div>
    );
};

export default Header;