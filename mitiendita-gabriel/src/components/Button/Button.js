import './Button.css'
const Button = ({ funcion }) => {
    return (
        <div>
            <button onClick={funcion} className='botonPrueba'>Presioname</button>
        </div>
    )
}

export default Button