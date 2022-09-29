import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getFirestore, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    // El useParams me devuelve un objeto con los parametros que le paso a la ruta desde el ItemList
    const { id } = useParams()
    const [item, setItem] = useState([])
    const db = getFirestore()

    const getItem = () => {
        // con el id que recibo por parametro, busco el producto en la base de datos
        const queryDoc = doc(db, "items", id)
        // obtengo el documento
        getDoc(queryDoc).then(res => {
            // si existe, lo guardo en el estado
            setItem(res.data())
        })
    }

    useEffect(() => {
        getItem()
    }, [id]);

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer