import Picoh1 from '../common/PicoH1'
import style from './BoxStyle.module.css'
import { useRef, useState, useEffect } from 'react'

const Box = () => {
  // 날짜 선택
  const selDate = useRef();
  const yesterday = new Date(new Date() - 86400000).toISOString().slice(0,10).replaceAll("-","")
  const [dt,setDt] = useState(yesterday); 
  let url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";
  let nUrl = "";
  // 첫 렌더링 시 값 설정 및 포커싱
  
  useEffect(()=>{
    selDate.current.focus();
    // ref의 값을 설정가능
    selDate.current.value = new Date(new Date() - 86400000).toISOString().slice(0,10);
    // new Date().setDate(newDate()-1)
    // eslint-disable-next-line 
    nUrl = url + yesterday;
    fetch(nUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
    })
    .catch(e => console.log("데이터 불러오기에 실패하였습니다."));
  },[])

  const handleChange = () => {
    setDt(selDate.current.value.replaceAll("-",""));
    //console.log(nUrl);
    fetch(nUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data.boxOfficeResult.dailyBoxOfficeList);
    })
    .catch(e => console.log("데이터 불러오기에 실패하였습니다."));
  };
  
  useEffect(()=>{
    //console.log(dt);
    // eslint-disable-next-line 
    nUrl = url + dt;
  },[dt])

  return (
    <main className="container">
        <Picoh1 title="일일 박스 오피스"/>
        <article>
            <header>
                <div className={style.dt} htmlFor='dt'>선택 날짜 : {dt}</div>
                <form>
                  <input onChange={handleChange} ref={selDate} type='date' id='dt' name='dt'/>
                </form>
            </header>
        </article>
    </main>
  )
}

export default Box;