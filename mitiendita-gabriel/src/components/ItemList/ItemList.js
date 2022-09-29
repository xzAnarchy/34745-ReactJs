import Item from "../Item/Item"
import "./ItemList.css"
import { Link } from "react-router-dom"
const ItemList = ({ lista }) => {
    return (
        <div className="itemContainer">
            {lista.map((product) => (
                // a cada item le paso el id para que sepa a que ruta ir
                <Link key={product.id} to={'/detail/' + product.id} style={{ textDecoration: 'none', color: 'white' }}>
                    <Item
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                    />
                </Link>
            ))}
        </div>
    )
}

export default ItemList