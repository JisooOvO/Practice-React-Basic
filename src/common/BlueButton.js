const BlueButton = ({item, handleOK}) => {
  return (
    <button onClick={handleOK} className="bg-[#1095C1] shadow-md text-xl font-bold rounded-xl text-white h-10 hover:bg-[#08769B]">{item}</button>
    )
}

export default BlueButton