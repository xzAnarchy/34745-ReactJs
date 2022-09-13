const ItemDetail = ({ lista }) => {
    return (
        <div>
            <h2>{lista.title}</h2>
            <h3>{lista.price}</h3>
            <img width={'200px'} src={lista.image} alt={lista.title} />
        </div>
    )
}

export default ItemDetail