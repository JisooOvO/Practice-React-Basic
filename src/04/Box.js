import { useState, useEffect } from "react";
import style from './BoxStyle.module.css';

const Box = () => {
    const [boxlist,setBox] = useState();
    const [listTage,setListTag] = useState();
    const [mvDetail,setDetail] = useState();

    // 컴포넌트 생성시 한번 실행
    useEffect(()=>{
        const url = "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918";
        
        fetch(url)
        .then( res => res.json())
        .then( data => {
            //console.log(data);
            setBox(data.boxOfficeResult.dailyBoxOfficeList);
        })
        .catch(e => console.log(e));   
    },[]); // 한번만 실행

    const handleMvDetail = (item) => {
        setDetail(
            <div className={style.detail}>
                <span>[{item.movieCd}] {item.rankOldAndNew}</span>
                <span> 개봉일 : {item.openDt} </span>
            </div>
        )
    }

    // state 변수가 변경될 때 마다 실행
    useEffect(()=>{
        //console.log(boxlist);
        if(boxlist){
            setListTag(boxlist.map((item, idx) =>
                <tr key={'tr'+idx} onClick={()=>handleMvDetail(item)}>
                    <td key={'mvrnk'+idx}>{item.rank}</td>
                    <td key={'mv'+idx}>{item.movieNm}</td>
                    <td key={'salesAcc'+idx}>{item.salesAcc.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</td>
                    <td key={'rankInten'+idx}>{
                                                item.rankInten === "0"
                                                ? "-"
                                                : item.rankInten > 0
                                                ? "▲ " + item.rankInten
                                                : "▼ " + item.rankInten.slice(1)}</td>
                </tr>
            ));
        }
    },[boxlist]);

    return(
        <main className="container">
            <article>
                <header><h2>일일박스 오피스</h2></header>
                  <table>
                     <thead>
                        <tr className={style.theader}>
                            <th>순위</th>
                            <th>영화명</th>
                            <th>누적 매출액</th>
                            <th>순위 변동</th>
                        </tr>
                     </thead>
                     <tbody>
                        {listTage}
                     </tbody>
                  </table>
                  <footer>
                        {mvDetail}
                  </footer>
            </article>
        </main>
    );
};

export default Box;