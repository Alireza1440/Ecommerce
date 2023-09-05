import { Link } from "react-router-dom"

function Product({ id, src, alt, name, price }) {
  return (
    <div>
      <Link to={`/product/${id}`}>
        <img className="w-[200px] h-[200px] bg-gray-200 cursor-pointer rounded-[6px]" src={src} alt={alt} />
      </Link>
      <h3 className="my-2">{name}</h3>
      <h4>{price}</h4>
    </div>
  )
}

export default Product