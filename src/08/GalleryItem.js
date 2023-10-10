import GalleryCard from "./GalleryCard";

const GalleryItem = ({item}) => {
    console.log(item);
    const tags = item.map((i,idx)=>
        <GalleryCard item={i} idx={idx} key={idx}/>
    );
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {tags}        
    </div>
  )
}

export default GalleryItem