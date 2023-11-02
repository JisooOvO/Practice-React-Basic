import { useState } from "react"
import Div1 from "./Div1"

const DivMain = () => {
  const [n,setN] = useState(0);
  const [n2,setN2] = useState(0);
  const handleClick = () => {
    setN(n+1);
    setN2(n2*2);
  }
  const handleClick2 = () => {
    setN(n-1);
    setN2(n2/2);
  }
  return (
    <div className="bg-green-200 h-96">
        <div className="text-green-700">DivMain</div>
        <div className="text-green-700 text-center">n={n}</div>
        <div className="text-green-700 text-center">n2={n2}</div>
        <main className="container"><Div1 n={n} n2={n2} handleClick={handleClick} handleClick2={handleClick2}/></main>
    </div>
  )
}

export default DivMain