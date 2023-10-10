import style from './Lotto.module.css';
import { useState } from 'react';

function Addnum (numArr,n){
    while(numArr.length < n){
        let num = Math.floor(Math.random() * 45) + 1;
        if (numArr.indexOf(num) < 0){
            numArr.push(num);
        }
    }
}

const Lotto = () => {
    let numArr = [];
    const [lottoTag, setLottoTag] = useState([]);

    const handleClick = () => {
        numArr = [];
        Addnum(numArr,6);
        numArr.sort(function (a, b) {
            return a - b;
        });
        numArr.push("+");
        Addnum(numArr,8);
        setLottoTag(numArr.map((item,idx) =>
            <div key={"lotto"+idx} className={style['lottoball'+Math.floor(item/10)]}>{item}</div>
        ));
    }
    
    return (
        <main className="container">
            <article>
                <header>
                    <h1>로또 생성기</h1>
                </header>
                <div className={style.lottobox}>
                    {lottoTag}
                </div>
                <footer>
                    <button onClick={() => handleClick() }>생성하기</button>
                </footer>
            </article>
        </main>
    )
};

export default Lotto