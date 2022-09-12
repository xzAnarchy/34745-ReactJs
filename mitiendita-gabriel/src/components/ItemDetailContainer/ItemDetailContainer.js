import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import data from "../mockData.js"

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])

    useEffect(() => {
        getItem
            .then((response) => {
                setItem(response.find(el => el.id === 1))
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
            <ItemDetail lista={item} />
        </>
    )
}

export default ItemDetailContainer