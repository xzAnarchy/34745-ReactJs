import Computers from "../Computers/Computers"

const ComputerList = ({ lista }) => {
    return (
        <div className="itemContainer">
            {lista.map((product) => (
                <Computers
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    description={product.description}
                />
            ))}
        </div>
    )
}

export default ComputerList