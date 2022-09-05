import 'materialize-css/dist/css/materialize.min.css'
import CartWidget from './CartWidget/CartWidget';

const NavBar = ({ item }) => {
    return (
        <div className='navBar'>

            <div id='logoNavBar'><CartWidget /></div>
            <span className='cartQuantity'>{item}</span>


            <div><a className='navLink' href='#'>Inicio</a></div>
            <div><a className='navLink' href='#'>Computadoras</a></div>
            <div><a className='navLink' href='#'>Celulares</a></div>
            <div><a className='navLink' href='#'>Servicios</a></div>

        </div>
    )
}

export default NavBar;