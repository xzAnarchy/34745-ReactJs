import { useEffect, useState } from "react"
import ItemDetail from "../../components/ItemDetail/ItemDetail"
import data from "../../components/mockData.js"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [item, setItem] = useState([])

    useEffect(() => {
        getItem
            .then((response) => {
                setItem(response.find(el => el.id === id))
            })
            .catch(error => console.log(error))
    }, []);

    const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    })

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer