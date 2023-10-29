import { Link } from "react-router-dom";


function NavBar(){
    return(<ul className="nav">
        <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/async">Async Example</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/api">Async API</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/counter">Counter</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/greeting">Greetings</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/states">State</Link>
        </li>

        <li className="nav-item">
            <Link className="nav-link" to="/toggle">Toggle Button</Link>
        </li>

        
    </ul>)
}

export default NavBar;