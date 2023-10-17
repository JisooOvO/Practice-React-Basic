import GalleryCard from "../common/GalleryCard copy";
import pusandata from "./pusandata.json";

const Busan = () => {
  const content = pusandata.map((item,idx)=>
    <GalleryCard key={idx} imgsrc={item["썸네일이미지URL"]}
    title={item["제목"]}
    content={item["상세내용"]}
    sptag={item["주요장소"]}/>
  )


  console.log(content);
  return (
    <main className="m-10 tru">
      <article>
        <header>
          <h1 className="text-2xl font-bold">부산축제정보</h1>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {content && content}
        </section>
      </article>
    </main>
  )
}

export default Busan