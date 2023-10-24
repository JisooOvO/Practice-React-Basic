import { Link } from "react-router-dom"
const FcstNav = () => {
  return (
    <header className="flex justify-between items-center p-2 mb-6 mt-2 mx-2 h-14 border-b">
        <div className="w-32 whitespace-nowrap text-lg font-bold cursor-pointer flex justify-center items-center h-8 hover:bg-gray-200 border-solid rounded-3xl">
            기상청 예보
        </div>
        <Link to="/"><div className="w-12 text-lg font-bold box-content h-8 text-white flex items-center 
        justify-center px-4 border-1 bg-[#1095C1] rounded-3xl hover:bg-[#08769B]">HOME</div></Link> 
    </header>
  )
}

export default FcstNav