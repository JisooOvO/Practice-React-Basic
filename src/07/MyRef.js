//snipet rafce
import PicoH1 from '../common/PicoH1'
import { useState, useEffect, useRef } from 'react';

const MyRef = () => {
    //0. hook 사용시 변수/함수는 global lexical 환경에 위치
    const title = 'Practice useRef Hook';
    const [cnt1,setCnt1] = useState();
    const cnt2 = useRef(0);
    const txt1 = useRef();

    //1.useState > 변수를 재 렌더링 *update
    const handleClick = () => {
        setCnt1(cnt1 + 1);
        //console에 변경된 값이 나오지 않음 -
        //console.log(cnt1);
    };

    //2. useEffect > component가 생성 및 업데이트 될 때 반드시 실행
    //함수 내에서 사용 불가능
    
        //2-1. create > 빈 배열, 한번만 실행
        useEffect(()=>{
            //setCnt1(100);
            // input 태그에 ref 속성을 주어 메서드 사용가능
            txt1.current.focus();
        },[])
        
        //2-2. update
        useEffect(()=>{
            console.log("useEffect" + cnt1);
        },[cnt1])
    
    //3. useRef > current 메소드를 사용하여 값을 변경하지만 재렌더링을 하지 않음
    // 주로 input 에 반영
    // 재 렌더링시 값을 새로 변경
    const handleClickRef = () => {
        cnt2.current = cnt2.current + 1;
        console.log("handleClickRef" + cnt2.current);
    };

    const handleChange = () => {
        // ref -> input태그이므로 value 값을 가져옴(입력 값 렌더링 할 이유 X -> ref 사용)
        // ref로 가져온 값을 useState로 재 렌더링
        setCnt1(+txt1.current.value);
        console.log("handleChange" + txt1.current.value);
    };

    return (
        <main className="container">
            <article>
                <PicoH1 title={title}/>
                <div className='grid'>
                    <div>state 변수 : {cnt1}</div>
                    <div>ref 변수 : {cnt2.current}</div>
                </div>
                <footer>
                    <div className='grid'>
                        <button onClick={handleClick}>STATE 변수 증가</button>
                        <button onClick={handleClickRef}>REF 변수 증가</button>
                    </div>
                </footer>
            </article>
            <article>
                <PicoH1 title="Form 태그에서 useRef 활용"/>
                <form>
                    <input ref={txt1} 
                    type='number' id="txt1" name="txt1" placeholder='숫자 입력'
                    onChange={handleChange}/>
                </form>
            </article>
        </main>
  )
}

export default MyRef