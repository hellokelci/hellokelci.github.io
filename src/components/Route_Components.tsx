import logo from "/logo.png"
import { Link } from "react-router-dom";
import "../css/global.css"

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
                        <li><Link className="link home" to="/">Home</Link></li>
                        {/* <li><Link className="link studio" to="/projects">Projects</Link></li> */}
                        <li><Link className="link resume" to="/resume">Resume</Link></li>
                        {/* <li><Link className="link contact" to="/contact">Contact</Link></li> */}
                        <li className="logo"> <img src={logo} alt="Colorful personal website logo with the initials KLËMM" /> </li>
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