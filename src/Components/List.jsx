import React, { useState } from 'react'
import data from './Data'
function List() {
    const [tours] = useState(data)
    const[readMore,setReadMore] = useState(false)
  return (
    <div>
        {tours.map((tour)=> (
            <div key={tour.id}>
                <img src={tour.image} alt="not found" />
                <h1>{tour.title}</h1>
              {readMore ? tour.des : `${tour.des.substring(0,200)}...`}
              <button onClick={()=> setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Show more'}</button>
            </div>
        ))}
    </div>
  )
}

export default List