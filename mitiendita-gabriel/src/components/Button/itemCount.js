import './itemCount.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const ItemCount = ({ item, minus, plus }) => {
    return (
        <>
            <div className='itemCount'>
                <button onClick={plus} className='botonesStock'><span className='plusMinus'>+</span></button>
                <p className='count'>{item}</p>
                <button onClick={minus} className='botonesStock'><span className='plusMinus'>-</span></button>
            </div>
            <div><button onClick={plus} className='botonPrueba'>Agregar al Carrito</button></div>
        </>
    )
}

export default ItemCount