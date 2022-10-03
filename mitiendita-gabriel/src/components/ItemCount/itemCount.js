import './itemCount.css'

const ItemCount = ({ setQuantity, quantity, stock }) => {

    const plus = () => {
        quantity < stock
            ? setQuantity(quantity + 1)
            : alert('Se alzanzo el stock maximo');
    }
    const minus = () => {
        quantity > 0
            ? setQuantity(quantity - 1)
            : alert('No has seleccionado ningun articulo');
    }

    return (
        <>
            <div className='itemCount'>
                <button onClick={minus} className='botonesStock'><span className='plusMinus'>-</span></button>
                <p className='count'>{quantity}</p>
                <button onClick={plus} className='botonesStock'><span className='plusMinus'>+</span></button>
            </div>
        </>
    )
}

export default ItemCount