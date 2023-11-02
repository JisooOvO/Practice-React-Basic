import { useEffect, useState, useRef } from "react";
import TailSelect from "../common/TailSelect";
import getxy from "./json/getxy.json"
import BlueButton from "../common/BlueButton";
import { Link } from "react-router-dom";

const FcstMain = () => {
  const [dt,setDt] = useState();
  const [area, setArea] = useState();
  const [x, setX] = useState();
  const [y, setY] = useState();

  const indt = useRef();
  const opItem = getxy.map(item => 
    [item["격자 X"] + "-" + item["격자 Y"] + "-" + item["1단계"], item["1단계"]]
  )
 
  const handleDtChange = (e) => {
    setDt(e.target.value.replaceAll('-',''));
  }
 
  const handleSelChange = (e) => {
    //console.log(e.target.value);
    let temp = e.target.value.split('-');
    setX(temp[0]);
    setY(temp[1]);
    setArea(temp[2]);
  }

  const handleBtClink = (e) => {
    if(area) return;
    e.preventDefault();
  }

  useEffect(()=>{
    const now = new Date().toISOString().slice(0,10);
    setDt ( now.replaceAll('-','') );
    indt.current.value = now;

  },[])

  useEffect(()=>{
    //console.log(dt,x,y,area);
  },[dt,x,y,area])

  return (
    <section className="bg-white shadow-xl p-4">
      <h1 className="font-bold text-2xl mb-5 text-[#1095C1]">기상청 예보 정보입력</h1>
      <form action="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="date" ref={indt} id="dt" name="dt" onChange={handleDtChange}/>
        <TailSelect id={'sel'} opItem={opItem} handleChange={handleSelChange}/>
        <Link to={`/fetch/${dt}/${area}/${x}/${y}/1`}>
          <BlueButton item={"초단기예보"} handleOK={handleBtClink}/>
        </Link>
        <Link to={`/fetch/${dt}/${area}/${x}/${y}/2`}>
          <BlueButton item={"단기예보"} handleOK={handleBtClink}/>
        </Link>
      </div>
      </form>
    </section>
  )
}

export default FcstMain