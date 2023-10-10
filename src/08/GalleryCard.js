const GalleryCard = ({item,idx}) => {
  const tags = item.galSearchKeyword.split(",").map((i,idx)=>
      <span key={`st${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{"#"+i.trim()}</span>
  );
  return (
    <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg">
     <img className="w-full h-96" src={item.galWebImageUrl} alt={item.galTitle}/>
     <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.galTitle}</div>
     <p className="text-gray-700 text-base">
        {item.galPhotographyLocation}
     </p>
   </div>
    <div className="px-6 pt-4 pb-2">
        {tags}
    </div>
    </div>
  )
}

export default GalleryCard