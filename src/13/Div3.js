const Div3 = ({n,n2,handleClick,handleClick2}) => {
  return (
    <div className="bg-green-900 h-28">
      <div className="text-white">Div3</div>
      <div className="grid grid-cols-2">
        <div className="flex justify-center items-center">
          <button className="m-4 bg-white max-w-md font-bold text-green-700" onMouseMove={handleClick}>증가</button>
        </div>
        <div className="flex justify-center items-center">
          <button className="m-4 bg-white max-w-md font-bold text-green-700" onMouseMove={handleClick2}>감소</button>
        </div>
      </div>
    </div>
  )
}

export default Div3