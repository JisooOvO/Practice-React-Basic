import style from './Taccident.module.css';

function TaccidentNav({title,tag,sel,setSel}) {
  //console.log(sel);
  /* 버튼을 누르면 state가 변경 **/
  const handleClick = (e,item) => {
    //let p = e.target.parentElement.parentElement.childNodes;
    //for ( let i = 0 ; i < p.length ; i++){
    //    p[i].childNodes[0].classList.remove(style.box);
    //}
    //e.target.classList.toggle(style.box);
    setSel(item);
  }

  let cTag = tag.map((item,idx,)=>
    // className = { item === sel ? style : x }
    <li key={`li${idx}`}><button className={item === sel? style.box : style.none } onClick={(e)=>handleClick(e,item)}>{item}</button></li>
  );

  return (
    <div>
        <nav>
          <ul>
            <li><strong>{title}</strong></li>
          </ul>
          <ul>
            {cTag}
          </ul>
        </nav>
    </div>
  )
}

export default TaccidentNav