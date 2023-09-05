import { AiOutlineSearch } from 'react-icons/ai'

function SearchBar() {
  return (
    <div className='relative'>
      <input type="text" placeholder="جست و جو"
        className="w-80 px-4 py-2 outline-style-[none] border-[1px]
         rounded-[50px]" />
      <AiOutlineSearch className="absolute left-2 top-3.5 cursor-pointer" />
    </div>
  )
}

export default SearchBar