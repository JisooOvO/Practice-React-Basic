import style from './MyCom.module.css';

const MyComN = (probs) => {

    return (
        <>
        <div className={style.num}>{probs.num}</div>
        </>
    );
};

export default MyComN;