import PicoH1 from "../common/PicoH1";
import data from "./dataFrcst.json";
import style from "./Frcst.module.css"
import { useState } from "react";

const Frcst = () => {
    const dt = ["frcstOneDt","frcstTwoDt","frcstThreeDt","frcstFourDt"];
    const cn = ["frcstOneCn","frcstTwoCn","frcstThreeCn","frcstFourCn"];
    const [value,Setvalue] = useState();

    let frcst = {};

    dt.map((item,idx) =>
        frcst[data[item]] = data[cn[idx]]
    );

    const handleBt = (item) => {
        let str = frcst[item].split(",");
        let citys = [];
        let frcs = [];
        let color = [];
        for (let i in str){
            let city = str[i].slice(0,5).replace(":","").trim();
            let frc = str[i].slice(-2,);
            frc === "낮음" ? color.push("green") :
            frc === "보통" ? color.push("blue"):color.push("red");
            citys.push(city);
            frcs.push(frc);
        }
        str.map((item)=>
            console.log(item.split(":"))
        );
        
        Setvalue(citys.map( (item,idx) =>
            <span key={item+idx+'div'}>
                <span key={item+idx} className={style.cncity}>{item}</span> : 
                <span key={item+idx+'v'} className={style[`cnfrcs${color[idx]}`]}>{frcs[idx]}</span>
            </span>
        ));
    };

    return (
        <main className="container">
            <article>
                <PicoH1 title={"미세먼지"}/>
                <div className="grid">
                    {Object.keys(frcst).map((item,idx) => 
                        <div onClick={()=>{handleBt(item)}} 
                        key={item+idx} className={style.dtkey}>{item}</div>
                    )}
                </div>
                <div className={style.data}>{value}</div>
            </article>
        </main>
  );
};

export default Frcst