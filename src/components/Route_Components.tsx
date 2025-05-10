import logo from "/letter-k.png"
import { Link } from "react-router-dom";
import "../css/global.css"
import "../css/components/navigation_bar.css"

export function Footer() {
    const date = new Date();
    return (
        <>
            <div className="footer-container">
                <footer>
                    <p>Copyright © {date.getFullYear()} • Made with a :)</p>
                </footer>
            </div>
        </>
    );
}

export function NavigationBar() {
    return (
        <>
            <div className="navigation-container">
                <nav>
                    <ul>
                        <li><Link className="navigation-link nav-home" to="/">Home</Link></li>
                        <li><Link className="navigation-link nav-resume" to="/resume">Resume</Link></li>
                        <li><Link className="navigation-link nav-contact" to="/contact">Contact</Link></li>
                        <li className="nav-logo"> <img src={logo} alt="Colorful portfolio site logo made of cubes stacked to depict the letter K" /> </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export function RouteTitle({plain_text, children}: {plain_text?: string, children?:React.ReactNode}) {
    return (
        <div className="route-title-container">
            <h1>{plain_text}</h1>
            {children}
        </div>
    )
}