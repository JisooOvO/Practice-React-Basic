import { useState } from "react";
import TailSelect from "../common/TailSelect"
import getcode from "./json/getcode.json"
import Table from "../common/Table";

const Ultra = ({dt, area, m, tItem}) => {
  let choice;
  let category;
  let unit;
  const [tableData,setTableData] = useState();
  if ( m === '1') choice ="초단기예보"
  else if ( m === '2') choice = "단기예보"
  let cateFilter = getcode.filter(item => item.예보구분 === choice);
   
  let opItem = cateFilter.map(item => [item.항목값,item.항목명]);

  const handleChange = (e) => {
    category = e.target.value;
    unit = cateFilter.filter(item => item['항목값'] === category)[0]['단위'];
    let selectData = tItem.filter(item => item['category'] === category);
    //console.log(tItem.filter(item => item['category'] === category));
    if(selectData[0] === undefined) {
      unit = "";
      setTableData(<tr><td colSpan={2} className="text-center">데이터가 없습니다</td></tr>)
    }else if(choice === '초단기예보'){
      setTableData(selectData.map((item,idx)=>
      <tr key={`key${idx}`}>
          <td>{`${item["fcstTime"].slice(0,2)}:${item["fcstTime"].slice(2,4)}`}</td>
          <td>{ item['category'] === 'SKY'
                  ? item["fcstValue"] === "1"
                  ? "맑음 🌞"
                  : item["fcstValue"] === "3"
                  ? "구름많음 ⛅"
                  : item["fcstValue"] === "4"
                  ? "흐림 ☁" : ""
              : item['category'] === 'PTY'
                  ? item["fcstValue"] === "0" 
                  ? "없음"
                  : item["fcstValue"] === "1"
                  ? "비"
                  : item["fcstValue"] === "2"
                  ? "비/눈"
                  : item["fcstValue"] === "3"
                  ? "눈"
                  : item["fcstValue"] === "5"
                  ? "빗방울"
                  : item["fcstValue"] === "6"
                  ? "빗방울/눈날림"
                  : item["fcstValue"] === "7"
                  ? "눈날림" : ""
              : item["fcstValue"] === "강수없음" ? "0" : 
              item["fcstValue"].indexOf(".") !== -1 ? item["fcstValue"].trim().padStart(4," ") 
              : (item["fcstValue"] + ".0").trim().padStart(4," ")} {unit === '코드값' ? "" : unit}</td>
      </tr>
    ))}else if(choice === '단기예보'){
      setTableData(tItem.filter(item => item['category'] === category).map((item,idx)=>
      <tr key={`key${idx}`}>
          <td>{`${item["fcstTime"].slice(0,2)}:${item["fcstTime"].slice(2,4)}`}</td>
          <td>{ item['category'] === 'SKY'
                  ? item["fcstValue"] === "1"
                  ? "맑음 🌞"
                  : item["fcstValue"] === "3"
                  ? "구름많음 ⛅"
                  : item["fcstValue"] === "4"
                  ? "흐림 ☁" : ""
              : item['category'] === 'PTY'
                  ? item["fcstValue"] === "0" 
                  ? "없음"
                  : item["fcstValue"] === "1"
                  ? "비"
                  : item["fcstValue"] === "2"
                  ? "비/눈"
                  : item["fcstValue"] === "3"
                  ? "눈"
                  : item["fcstValue"] === "4"
                  ? "소나기" : ""
              : item["fcstValue"] === "강수없음" ? "0" :
              item["fcstValue"] === "적설없음" ? "0" :
              item["fcstValue"].indexOf(".") !== -1 ? item["fcstValue"].trim().padStart(4," ") 
              : (item["fcstValue"] + ".0").trim().padStart(4," ")} {unit === '코드값' ? "" : unit}</td>
      </tr>
    ))}
  }

  const colName = ['관측 시간', '관측 값'];

  return (
    <section className="bg-white shadow-xl p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h1 className="font-bold text-2xl mb-5 text-[#1095C1]">
            {dt.slice(0,4) + '년' + dt.slice(4,6) + '월' + dt.slice(6) + '일 '}
            {area} { m === '1' ? '초단기 예보 ' : '단기 예보 '}
        </h1>
        <TailSelect id={'sel'} opItem={opItem} handleChange={handleChange}/>
      </div>
      <Table colName={colName} tableData={tableData}/>
    </section>
  )
}

export default Ultra