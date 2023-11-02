import Div3 from "./Div3"

const Div2 = ({n,n2,handleClick,handleClick2}) => {
  return (
    <div className="bg-green-600 h-44">
      <div className="text-white">Div2</div>
      <main className="mx-14"><Div3 n={n} n2={n2} handleClick={handleClick} handleClick2={handleClick2}/></main>
    </div>
  )
}

export default Div2