import { BsInstagram } from "react-icons/bs";
import ButtonBlue from "./ButtonBlue";
import { useRef, useEffect, useState } from "react";
import GalleryCard from "../common/GalleryCard";

const Gallery = () => {
  const txtKeyword = useRef();
  const [k,setK] = useState();
  const [result,setResult] = useState();
  let keyword = "";

  useEffect(()=>{
    txtKeyword.current.focus();
  },[]);

  useEffect(()=>{
    //console.log("k : ", k);
    getData(k);
    // eslint-disable-next-line
  },[k]);

  const getData = (k) => {
    keyword = encodeURI(k);
    let serviceKey = "hnEwJ58FO4cilq2eST%2BJgn2uuRbC6EBulvkEeb6eX0VfrXYQ6JGGdBAbBnhZvTm3CUV2Btgwmb1h9JJ%2Fcwz%2Bgg%3D%3D";
    let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${keyword}&_type=json`;
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.response.body.items.item === undefined) return; 
        else
        //setResult(data.response.body.items.item);
        setResult(data.response.body.items.item.map((i,idx)=>
        <GalleryCard item={i} idx={idx} key={idx} />
       ));
    })
    .catch(e => console.log(e));
  };

  const handleOK = (e) => {
    e.preventDefault();
    if(txtKeyword.current.value === "") return;
    else setK(txtKeyword.current.value);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    txtKeyword.current.focus();
    txtKeyword.current.value = "";
    setResult("");
  };
  
  return (
    <main className="container">
        <article>
            <header className="flex justify-center">
                <div className="text-2xl font-bold">한국관광공사 관광사진 정보</div>
                <div>
                    <BsInstagram className="w-8 h-6 mt-1 mr-1"/>
                </div>
            </header>
            <form>
                <div className="grid">
                    <div className="w-full">
                        <input
                        ref={txtKeyword}
                        className="max-h-10 py-2 px-4 rounded-md text-sm p-2"
                        type="text" id="text1" name="text1" placeholder="키워드를 입력하세요" required/>
                    </div>
                    <div className="grid box-border">
                        <ButtonBlue caption={"확인"} handleClick={handleOK}/>
                        <ButtonBlue caption={"취소"} handleClick={handleCancel}/>
                    </div>
                </div>
            </form>
        </article>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {result}        
          </div>
        </section>
    </main>
  )
}

export default Gallery