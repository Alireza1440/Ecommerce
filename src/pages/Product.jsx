import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Product() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [product, setProduct] = useState('کالا')
  const [count, setCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      fetch('./data.json')
        .then(d => d.json())
        .then(d => d.find(p => p.id === id))
        .then(p => {
          setProduct(p)
          setIsLoading(false)
        })
    }, 800)
  }, [])
  return isLoading ? (<div className="flex justify-center mt-8">
    <div
      className='inline-block w-20 h-20 after:content-[""]
    rounded-[50%] border-[6px] border-l-black animate-spin'>
    </div>
  </div>
  )
    : (
      <div className="flex gap-5 h-[70vh] mt-6 pt-20 bg-purple-300">
        <img src={`.${product.src}`} alt="تصویر کالا" className="h-[300px]" />
        <div>
          <h1 className="text-[30px]">{product.name}</h1>
          <h3 className="mb-4">{product.desc}</h3>
          <h4 className="mb-4 font-bold text-orange-100">{product.price}</h4>
          <div className="mt-4 flex gap-4 w-min text-[20px] rounded-sm border-[1px] border-black">
            <button onClick={() => setCount(s => s > 0 ? --s : 0)} className="border-l-[1px] px-3 border-black">-</button>
            <div>{count}</div>
            <button onClick={() => setCount(s => ++s)} className="border-r-[1px] px-3 border-black">+</button>
          </div>
        </div>
      </div>
    )
}

export default Product