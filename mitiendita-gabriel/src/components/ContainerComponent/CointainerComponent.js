import Button from "../Button/Button"
import Greetings from "../Greetings/Greetings"

const CointainerComponent = () => {
    const funcionBoton = () => {
        console.log('Presionaron el Boton')
    }
    return (
        <div>
            <Greetings greetings='Hola, soy un saludo dentro de un contenedor' />
            <Button funcion={funcionBoton} />
        </div>
    )
}

export default CointainerComponent