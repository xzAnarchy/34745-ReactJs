import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    const [productList, setProductList] = useState([])
    // Recibe el id de la categoría seleccionada
    const { categoryName } = useParams()

    const getProducts = () => {
        //Inicializo la base de datos
        const db = getFirestore()
        //Inicializo la colección, indicandole el nombre de la colección que quiero traer
        const queryBase = collection(db, "items")
        // Si categoryName es undefined, no se filtra por categoría
        const querySnapshot = categoryName ? query(queryBase, where("category", "==", categoryName)) : queryBase

        //Obtengo los datos de la colección y los guardo en una variable
        getDocs(querySnapshot).then(response => {
            //Inicializo un array para guardar los datos, con el .docs obtengo los datos de la colección
            const data = response.docs.map(product => {
                return { id: product.id, ...product.data() }
            })
            //Si el parámetro de la URL es "all", muestro todos los productos
            setProductList(data)
        }).catch(error => { console.log(error) })
    };

    useEffect(() => {
        getProducts()
    }, [categoryName]);
    return (
        <>
            <ItemList lista={productList} />
        </>
    );

};

export default ItemListContainer