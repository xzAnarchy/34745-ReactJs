import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({ item }) => {
    return (
        <div className='navBar'>
            <ul className='navBarList'>
                <li>
                    <NavLink
                        to={"/"}>
                        <div id='logoNavBar'><CartWidget /></div>
                        <span className='cartQuantity'>{item}</span>
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
                    <NavLink
                        to={"computadoras"}
                        className={({ isActive }) => (isActive ? 'desactivated' : 'navLink')}>
                        Computadoras
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"celulares"}
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