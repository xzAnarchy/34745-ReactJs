import { useEffect, useState } from "react"
import ComputerList from "../../components/ComputerList/ComputerList"
import data from "../../components/mockData.js"
import { useParams } from "react-router-dom"

const ComputerContainer = () => {
    const { category } = useParams()
    const [item, setItem] = useState([])
    console.log(category)
    useEffect(() => {
        getItem
            .then((response) => {
                setItem(response.find(el => el.category == category))
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