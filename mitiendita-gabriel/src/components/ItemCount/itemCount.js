import './itemCount.css'

const ItemCount = ({ setCantidad, cantidad, stock }) => {

    const plus = () => {
        cantidad < stock
            ? setCantidad(cantidad + 1)
            : alert('Se alzanzo el stock maximo');
    }
    const minus = () => {
        cantidad > 0
            ? setCantidad(cantidad - 1)
            : alert('No has seleccionado ningun articulo');
    }

    return (
        <>
            <div className='itemCount'>
                <button onClick={minus} className='botonesStock'><span className='plusMinus'>-</span></button>
                <p className='count'>{cantidad}</p>
                <button onClick={plus} className='botonesStock'><span className='plusMinus'>+</span></button>
            </div>
        </>
    )
}

export default ItemCount