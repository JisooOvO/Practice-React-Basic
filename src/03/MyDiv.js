import MyDiv1 from "./MyDiv1";
import { useState } from "react";

const MyDiv = () => {
    const [n,setN] = useState(0); // 초깃값
    
    const handleClick = (e) => {
        if (e.target.innerText === "💖") setN(n+1)
        else if ( n > 0) setN(n-1); 
    };

    return (
        <main className="container">
            <article>
                <header><h2>My Div</h2></header>
                <MyDiv1 n={n}/>
                <footer>
                    <span onClick={handleClick}>💖</span>
                    <span onClick={handleClick}>👿</span>
                    <span>{n}</span>
                </footer>
            </article>
            
        </main>
    );
};

export default MyDiv;