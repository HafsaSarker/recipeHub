import { Link } from "react-router-dom";
import './Nav.css'
import { useSelector, useDispatch } from "react-redux";
import { FiLogOut } from 'react-icons/fi'
import { logout, reset } from "../../features/auth/authSlice";

export default function Nav() {
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    function onLogout(){
        dispatch(logout())
        dispatch(reset())

        window.location = '/'
    }

    return (
        <div className="nav">
                {user ? (
                    <ul>
                        <Link to="/home">
                            Home
                        </Link>

                        <Link to="/create">
                            <li>Create</li>
                        </Link>
                
                        <Link to="/register">
                            <li>
                                <button className="logout-btn icon" onClick={onLogout}>
                                Logout 
                                <FiLogOut/>
                                </button>
                            </li>
                        </Link>
                    </ul>
                ) : (
                    <ul>
                        <Link to="/">
                            <li>Login</li>
                        </Link>
                
                        <Link to="/register">
                            <li>Register</li>
                        </Link>
                    </ul>
                )}

                
          
        </div>
    )
}