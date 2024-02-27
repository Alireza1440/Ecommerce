import data from '../../public/data.json'
import Product from './Product'

function Products() {
  return (
    <div className="mt-12 pt-4 bg-blue-300 scroll-smooth" id='products'>
      <h1 className="text-center text-2xl">محصولات</h1>
      <h3 className="text-center">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت </h3>
      <div className='grid grid-rows-2 grid-cols-4 gap-y-6 mt-4 px-4 justify-items-center'>
        {data.map((p) => (<Product key={p.name} {...p} />))}
      </div>
    </div>
  )
}

export default Products