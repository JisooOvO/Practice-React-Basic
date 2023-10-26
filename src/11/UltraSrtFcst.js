import { useParams } from "react-router-dom"
import { useEffect, useRef, useState } from "react";
import getcode from './json/getcode.json'

const UltraSrtFcst = () => {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const [items, setItems] = useState();
  const sel = useRef();
  const [result, setResult] = useState();
  const [print, setPrint] = useState();
  const category = getcode.filter((item)=>
      item["예보구분"] === "초단기예보"
  )
  const ops = category.map((item,idx) =>
    <option key={`key${idx}`} value={item["항목값"]}>{item["항목명"]}</option> 
  )

  useEffect(()=>{
    const apikey = "hnEwJ58FO4cilq2eST%2BJgn2uuRbC6EBulvkEeb6eX0VfrXYQ6JGGdBAbBnhZvTm3CUV2Btgwmb1h9JJ%2Fcwz%2Bgg%3D%3D";
    let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`;
    url = url + `?serviceKey=${apikey}`;
    url = url + `&numOfRows=60&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=json`;

    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        setItems(data.response.body.items.item);
    })
    .catch(e => console.log(e));
    },[])

    useEffect(()=>{
        //console.log(result);
        if(result){
            let unit = category.filter((item)=> item['항목값'] === result[0]['category'])[0]['단위']
            setPrint(result.map((item,idx)=>
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
            ))
        }
        // eslint-disable-next-line
    },[result])

    const handleSelect = () => {
        if(items === undefined) {
            return;
        }
        setResult(items.filter((item)=>
            item["category"] === sel.current.value
        ))
    }

    return (
        <article>
            <div className="grid items-center text-lg font-bold text-[#1095C1]">
            {area} 일기 예보({dt.slice(0,4)}년{dt.slice(4,6)}월{dt.slice(6)}일) 
                <div>
                    <select ref={sel} onChange={handleSelect} id="sel1" name="sel1" className="text-base cursor-pointer font-normal text-black">
                        <option value='' hidden>항목선택</option>
                        {ops}
                    </select>
                </div>
            </div>
            <table className="mt-4 table-auto">
                <thead>
                    <tr>
                        <th className="text-[#08769B] font-bold w-96">관측시간</th>
                        <th className="text-[#08769B] font-bold w-96">관측 값</th>
                    </tr>
                </thead>
                <tbody>
                    {print}
                </tbody>
            </table>
        </article>
  )
}

export default UltraSrtFcst