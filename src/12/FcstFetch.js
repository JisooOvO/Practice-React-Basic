import { useParams } from "react-router-dom"
import Ultra from "./Ultra";
import { useEffect, useState } from "react";
import LoadView from "../common/LoadView";

const FcstFetch = () => {
  const area = useParams().area;
  const dt = useParams().dt;
  const m = useParams().m;
  const x = useParams().x;
  const y = useParams().y;
  const [titem, setTitem] = useState();
  const apikey = process.env.REACT_APP_API_KEY;
  const [dataStater,setDataStater] = useState(true);

  let choice; let time;
  if(m === '1'){
    choice = 'getUltraSrtFcst';
    time = '0630';
  }else if(m === '2'){ 
    choice ='getVilageFcst';
    time = '0500';
  }

  useEffect(()=>{
    let url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${choice}`;
    url = url + `?serviceKey=${apikey}&numOfRows=60&pageNo=1`;
    url = url + `&base_date=${dt}&base_time=${time}&nx=${x}&ny=${y}&dataType=json`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
      setTitem(data.response.body.items.item);
      setDataStater(false);
    }).catch(e => console.log(e));
    
    //eslint-disable-next-line
  },[])

  return (
    <div>
        { dataStater === true ? <LoadView/> : titem ? <Ultra dt={dt} area={area} m={m} tItem={titem} /> : ''}
    </div>
  )
}

export default FcstFetch