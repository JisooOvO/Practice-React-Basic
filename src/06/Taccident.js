import dataTaccident from './dataTaccident.json';
import PicoH1 from '../common/PicoH1';
import TaccidentNav from './TaccidentNav';
import { useState, useEffect } from 'react';

const Taccident = () => {
  //console.log(dataTaccident.data);
  //대분류
  let big = [...new Set(dataTaccident.data.map((item)=>
    item['사고유형_대분류']
  ))];
  
  const [sel1,setSel1] = useState();

  const [mid,setMid] = useState();

  const [sel2,setSel2] = useState();

  const [result,setRes] = useState();

  //중분류 데이터 출력
  useEffect(()=>{
    if (!sel1) return;
    //setSel2("");
    //setRes("");
    setMid(dataTaccident.data
      .filter((item)=>
        item['사고유형_대분류'] === sel1)
      .map((item)=>
        item['사고유형_중분류']
    ));
    // eslint-disable-next-line
  },[sel1]);

  //결과 데이터 출력
  useEffect(()=>{
    let res = dataTaccident.data
    .filter((item)=>
      item['사고유형_대분류'] === sel1 && item['사고유형_중분류'] === sel2
    );
    if(typeof res[0] === "object")
    // eslint-disable-next-line
    setRes(Object.keys(res[0]).map((item,idx)=>{ 
      if (item.slice(0,4) !== "사고유형"){


        return(
            <div key={`${idx}`}>
              <span>{item} : </span>
              <span>{res[0][item]}</span>
            </div>
    )}}));
    // eslint-disable-next-line
  },[sel2]);
  /** 선택한 아이템 sel을 넘길 수 있음 */
  return (
    <main>
      <article>
        <PicoH1 title="도로공단 사고유형별 교통사고 통계"/>
        <TaccidentNav title={"교통사고 대분류"} tag={big} sel={sel1} setSel={setSel1}/>
        {mid && <TaccidentNav title={"교통사고 중분류"} tag={mid} sel={sel2} setSel={setSel2}/>}
      </article>
      <div className="grid">
        {result}
      </div>
    </main>
  );
}

export default Taccident;