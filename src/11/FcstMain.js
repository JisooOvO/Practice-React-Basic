import { useState, useRef, useEffect } from "react"
import getxy from "./json/getxy.json"
import { Link } from "react-router-dom";

const FcstMain = () => {
  const dtRef = useRef();
  const selRef = useRef();
  const [dt, setDt] = useState();
  const [area, setArea] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();
  const ops = getxy.map((item,idx)=>
    <option key={`key${idx}`} value={item.행정구역코드}>{item["1단계"]}</option>
  );

  const handleDate = () => {
    setDt(dtRef.current.value.replaceAll("-",""));
  }

  const handleCity = () => {
    let pos = getxy.filter((item)=>
        item.행정구역코드 === +selRef.current.value
    )
    
    if(pos[0] !== undefined) {
        setArea(pos[0]["1단계"]);
        setX(pos[0]["격자 X"]);
        setY(pos[0]["격자 Y"]);
    }
  }

  const handleOK = (e) => {
    if(dt === undefined | area === undefined){
      alert("날짜 또는 지역을 선택하세요");
      e.preventDefault();
    } 
  }

  //start
  useEffect(()=>{
    dtRef.current.focus();
  },[])

  return (
    <article>
        <label id="fcst" className="text-xl font-bold mb-5 text-[#1095C1]">단기예보 선택</label>
        <form id="fcst" name="fcst" className="grid md:grid-cols-2">
            <input onChange={handleDate} ref={dtRef} id="date1" name="date1" type="date" className="mb-4 h-10 p-0 m-2"/>
            <select onChange={handleCity} ref={selRef} id="sel1" name="sel1" className="h-12 mb-4 p-0 m-2 cursor-pointer">
                <option value="" className="hidden">지역 선택</option>
                {ops}
            </select>
            <Link to={`/ultra/${dt}/${area}/${x}/${y}`}>
                <button onClick={handleOK} className="bg-[#1095C1] shadow-md text-xl font-bold rounded-xl m-2 text-white h-10 hover:bg-[#08769B]">초단기예보</button>
            </Link>
            <Link to={`/vilage/${dt}/${area}/${x}/${y}`}>
                <button onClick={handleOK} className="bg-[#1095C1] shadow-md text-xl font-bold rounded-xl m-2 text-white h-10 hover:bg-[#08769B]">단기예보</button>            
            </Link>
        </form>
    </article>
  )
}

export default FcstMain