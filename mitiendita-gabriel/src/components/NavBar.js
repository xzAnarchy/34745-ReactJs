import logo from '../logo.svg';
import 'materialize-css/dist/css/materialize.min.css'

const NavBar = () => {
    return (<div className='navBar'>

    <div id='logoNavBar'><img src={logo} className="appNavBar" alt="logo"/></div>


    <div><a className='navLink' href='#'>Inicio</a></div>
    <div><a className='navLink' href='#'>Computadoras</a></div> 
    <div><a className='navLink' href='#'>Celulares</a></div>
    <div><a className='navLink' href='#'>Servicios</a></div>

    </div>
    )
}

export default NavBar;