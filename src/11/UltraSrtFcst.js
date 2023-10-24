import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

const UltraSrtFcst = () => {
  const dt = useParams().dt;
  const area = useParams().area;
  const x = useParams().x;
  const y = useParams().y;
  const [items, setItems] = useState();

  useEffect(()=>{
    const apikey = "hnEwJ58FO4cilq2eST%2BJgn2uuRbC6EBulvkEeb6eX0VfrXYQ6JGGdBAbBnhZvTm3CUV2Btgwmb1h9JJ%2Fcwz%2Bgg%3D%3D";
    let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst`;
    url = url + `?serviceKey=${apikey}`;
    url = url + `&numOfRows=60&pageNo=1&base_date=${dt}&base_time=0630&nx=${x}&ny=${y}&dataType=json`;

    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.response.body.items.item);
        setItems(data.response.body.items.item);
    })
    .catch(e => console.log(e));
    },[])

    useEffect(()=>{
        console.log(items);
    },[items])

    return (
        <article>
            <div className="grid items-center">
                {area}({dt.slice(0,4)}-{dt.slice(4,6)}-{dt.slice(6)})
                <div>
                    <select id="sel1" name="sel1">
                        <option value=''>항목선택</option>
                    </select>
                </div>
            </div>
        </article>

  )
}

export default UltraSrtFcst