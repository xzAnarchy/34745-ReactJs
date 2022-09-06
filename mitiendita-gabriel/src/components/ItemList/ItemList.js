import Item from "../Item/Item"
const ItemList = ({ lista }) => {
    return (
        <div>
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