import pusandata from "./pusandata.json";
import ButtonBlue from "../08/ButtonBlue"
import { useRef, useEffect, useState } from "react";
import GalleryCard from "../common/GalleryCard copy";

const Busan = () => {
  const content = [];
  const rcId = useRef();
  const [card, setCard] = useState();
  let url = "";

  //
  pusandata.map((i)=>
    content.push([i.콘텐츠ID,i.콘텐츠명.slice(0,i.콘텐츠명.lastIndexOf("("))])
  );

  const opt = content.map((i,idx)=>
    <option key={idx} value={i[0]}>{i[1]}</option>
  );

  //
  const handleOk = (e) => {
    e.preventDefault();
    getData(rcId.current.value);
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let con = data.getFestivalKr.item[0];
      console.log(con);
      setCard(<GalleryCard imgsrc={con.MAIN_IMG_THUMB} title={con.TITLE} content={con.TRFC_INFO} sptag={con.PLACE}/>);
    })
    .catch(e => console.log(e));
    rcId.current.focus();
  };

  const getData = (value) => {
    url = `https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?serviceKey=hnEwJ58FO4cilq2eST%2BJgn2uuRbC6EBulvkEeb6eX0VfrXYQ6JGGdBAbBnhZvTm3CUV2Btgwmb1h9JJ%2Fcwz%2Bgg%3D%3D&pageNo=1&numOfRows=10&resultType=json&UC_SEQ=${value}`;
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setCard("");
    console.log("cancel");
    rcId.current.focus();
  };

  const handlechange = () => {
    getData(rcId.current.value)
    console.log(url);
  }

  useEffect(()=>{
    rcId.current.focus();
  },[])

  return (
    <main className="m-10">
      <article>
        <header>
          <h1 className="text-2xl font-bold">부산축제정보</h1>
        </header>
        <form>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2">      
              <select ref={rcId} onChange={handlechange} className="rounded" id="sel" name="sel">
                {opt}
              </select>
            </div>
            <div>
              <ButtonBlue caption={"확인"} handleClick={handleOk}/>
            </div>
            <div>
              <ButtonBlue caption={"취소"} handleClick={handleCancel}/>
            </div>
          </div>
        </form>
      </article>
      <section className="m-10">
        {card === undefined ? <p>대기중</p> : card}
      </section>
    </main>
  )
}

export default Busan