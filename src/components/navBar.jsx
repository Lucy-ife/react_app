import Logo from '../assets/logo.png'
function NavBar(){
    return(
        <div className="navBar">
            <nav>
                <img src={Logo} alt="Logo" />
                <ul>
                    <li>Exchange</li>
                    <li>Affiliates</li>
                    <li>Airdrops</li>
                    <li>About Us</li>
                </ul>
                <button>Sign in</button>
                <button>Sign up</button>
            </nav>
        </div>
    );
}
export default NavBar;