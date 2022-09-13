import Item from "../Item/Item"
import "./ItemList.css"
const ItemList = ({ lista }) => {
    return (
        <div className="itemContainer">
            {lista.map((product) => (
                <div key={product.id}>
                    <Item
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                </div>
            ))}
        </div>
    )
}

export default ItemList