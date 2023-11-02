import Div2 from "./Div2"

const Div1 = ({n,n2,handleClick,handleClick2}) => {
  return (
    <div className="bg-green-300 h-72">
        <div className="text-white">Div1</div>
        <main className="m-14"><Div2 n={n} n2={n2} handleClick={handleClick} handleClick2={handleClick2}/></main>
    </div>
  )
}

export default Div1