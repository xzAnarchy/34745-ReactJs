import Item from "../Item/Item"
import "./ItemList.css"
import { Link } from "react-router-dom"
const ItemList = ({ lista }) => {
    return (
        <div className="itemContainer">
            {lista.map((product) => (
                <Link key={product.id} to={'/detail/' + product.id} style={{ textDecoration: 'none', color: 'white' }}>
                    <Item
                        title={product.title}
                        price={product.price}
                        image={product.image}
                    />
                </Link>
            ))}
        </div>
    )
}

export default ItemList