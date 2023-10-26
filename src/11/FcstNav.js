import { Link } from "react-router-dom"
const FcstNav = () => {
  return (
    <header className="flex justify-between items-center p-2 mb-6 mt-2 h-14 border-b shadow-lg bg-[#ffffff] w-screen">
        <div className="w-32 whitespace-nowrap text-xl m-2 font-bold flex justify-center items-center text-[#1095C1] h-8 border-solid rounded-3xl">
        기상청 예보⛅
        </div>
        <Link to="/"><div className="w-12 text-lg font-bold shadow-md box-content h-8 text-white flex items-center 
        justify-center px-4 mr-4 border-1 bg-[#1095C1] rounded-3xl hover:bg-[#08769B]">HOME</div></Link> 
    </header>
  )
}

export default FcstNav