const GalleryCard = ({imgsrc, title, content, sptag}) => {
  const sptags = sptag.split(",").map((item,idx)=>
    <span key={`st${idx}`} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{"#"+item.trim()}</span>
  )
  return (
    <div key={`key`} className="max-w-sm rounded overflow-hidden shadow-lg">
     <img className="w-full h-96" src={imgsrc} alt={title}/>
     <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 truncate">{title}</div>
     <p className="text-gray-700 text-base truncate">
        {content}
     </p>
   </div>
    <div className="px-6 pt-4 pb-2">
      {sptags}
    </div>
    </div>
  )
}

export default GalleryCard