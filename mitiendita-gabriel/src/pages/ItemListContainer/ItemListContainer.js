import data from "../../components/mockData.js"
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    const { categoryName } = useParams()


    useEffect(() => {
        setTimeout(() => {
            getProducts()
        }, 2000);
    }, [categoryName]);

    const getProducts = () => {
        if (categoryName) {
            const response = data.filter((item) => item.category === categoryName);
            setProductList(response)
        } else {
            const response = data;
            setProductList(response)
        }
    }

    /* useEffect(() => {
        getProducts
            .then((response) => {
                setProductList(response)
            })
            .catch(error => console.log(error))
    }, []);

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000);
    }); */

    return (
        <>
            <ItemList lista={productList} />
        </>
    );

};

export default ItemListContainer