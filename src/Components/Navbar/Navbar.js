import './Navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/ex1" >Example 1</Link>
                    </li>
                    <li>
                        <Link to="/ex2" >Example 2</Link>
                    </li>
                    <li>
                        <Link to="/ex3" >Example 3</Link>
                    </li>
                    <li>
                        <Link to="/ex4" >Example 4</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;