import MyComN from "./MyComN";
const MyCom = () => {
    let n = 20;
    //let num1;
    // if ( n === undefined )
    //     num1 = <div>값이 없습니다."</div>;
    // else
    //     num1 = <MyComN num={n}/>;

    return (
        <div>
            <main className="container">
                <article>
                    <header>MyCom</header>
                    {
                        // 1. num1

                        // 2. n === undefined ? 1 : 2
                        
                        // 3. falsy 
                        n && <MyComN num={n}/>
                    }
                </article>
            </main>
        </div>
    );

};

export default MyCom;