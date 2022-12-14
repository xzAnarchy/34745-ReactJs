import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({ item }) => {
    return (
        <div className='navBar'>
            <ul className='navBarList'>
                <li>
                    <NavLink
                        to={"/cart"}>
                        <div id='logoNavBar'><CartWidget /></div>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) => (isActive ? 'navLink' : 'desactivated')}>
                        Home
                    </NavLink>
                </li>
                <li>
                    {/* definir categorias  que agarrara el useParams*/}
                    <NavLink
                        to={"/category/computadoras"}
                        className={({ isActive }) => (isActive ? 'desactivated' : 'navLink')}>
                        Computadoras
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/category/celulares"}
                        className={({ isActive }) => (isActive ? 'desactivated' : 'navLink')}>
                        Celulares
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"contacto"}
                        className={({ isActive }) => (isActive ? 'desactivated' : 'navLink')}>
                        Contacto
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;