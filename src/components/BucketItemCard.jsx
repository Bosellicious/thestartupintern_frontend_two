import React from 'react'
import { Link } from 'react-router-dom';


function BucketItemCard() {
    return (
    <div className="bucket-item active">
     <h3 className="item-title font-bold ">
     Lorem ipsum began as scrambled, nonsensical Latin derived
     
    </h3>
      <div className="item-content">
      <p>
    Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. 
    “It’s not Latin, though it looks like it, and it actually says nothing,” 
     Before & After magazine answered a curious reader, “Its ‘words’ loosely approximate the frequency with which letters occur in English,
    which is why at a glance it looks pretty real. 
     </p>
     <div className="item-footer mt-10 ">
      <Link to="/bucket-item">View Details</Link>
        
     <div>
         <span className="block md:inline text-gray-400 mx-1">20/05/2025</span>
         <span className="block md:inline mx-1">20/05/2025</span>
       </div>
       </div>
     </div>
   </div>
    )
}

export default BucketItemCard
