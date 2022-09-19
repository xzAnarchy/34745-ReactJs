import { useEffect, useState } from "react"
import ComputerList from "../../components/ComputerList/ComputerList"
import data from "../../components/mockData.js"
import { useParams } from "react-router-dom"

const ComputerContainer = () => {
    const { type } = useParams()
    const [item, setItem] = useState([])
    console.log(type)
    useEffect(() => {
        getItem
            .then((response) => {
                setItem(response.find(el => el.type == type))
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
            {item && <ComputerList lista={item} />}
        </>
    )
}

export default ComputerContainer