import { useEffect, useState } from "react";

const ClockTime = () => {
    const [dt, setDt] = useState(new Date().toLocaleTimeString());

    //callbackfunc , DependencyArr
    useEffect(()=>{
        const t = setInterval(()=>{
            setDt(new Date().toLocaleTimeString());
        },1000)
        return () => {clearInterval(t)};
    },[]); // -> 한 번 실행

    // 특정 변수가 바뀔 때 실행
    useEffect(()=>{
        console.log(dt);
    },[dt]);

    return (
        <>
            <p>Hello React!!</p>
            <div>현재 시간 : {dt}</div>
        </>
    );
};

export default ClockTime 