import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                
                <Link to="/create">
                    <li>Create</li>
                </Link>
            </ul>
        </div>
    )
}