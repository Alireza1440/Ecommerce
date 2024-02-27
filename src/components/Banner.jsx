function Banner() {
  return (
    <div className="flex justify-center bg-[gold] opacity-70 z-1">
      <div className="w-[100vw] h-[70vh] pt-12 pr-[120px] relative text-xl">
        <p className="text-[50px]">لورم ایپسوم </p>
        <h3 className="mt-6 mb-4 text-[30px]">لورم ایپسوم متن</h3>
        <h1>لورم ایپسوم متن ساختگی با</h1>
        <img src="images/headphones_a_3.webp" alt="Headphone"
          className="shadow-black shadow-2xl absolute h-[70vh] right-[300px] top-0" />
        <button className="mt-4 py-2 px-6 rounded-[4px] bg-red-600 text-white">
          <span className="pointer" onClick={() => {
            document.getElementById('products').scrollIntoView()
          }} href="/products">خرید</span>
        </button>
      </div>
    </div>
  )
}

export default Banner