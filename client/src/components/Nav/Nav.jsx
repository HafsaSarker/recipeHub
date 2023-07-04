import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
    return (
        <div className="nav">
            <ul>
                {/* <Link to="/home">
                    <li>Home</li>
                </Link>
                
                <Link to="/create">
                    <li>Create</li>
                </Link> */}
                <Link to="/login">
                    <li>Login</li>
                </Link>
                
                <Link to="/register">
                    <li>Register</li>
                </Link>
            </ul>
        </div>
    )
}