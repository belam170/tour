import React, { useState } from 'react'
import data from './Data'
function List() {
    const [tours] = useState(data)
    const[readMore,setReadMore] = useState(false)
  return (
    <div className='tainer'>
        <div>
        </div>
    <div className='box'>
    <h2>Our Tours</h2>
        {tours.map((tour)=> (
            <div key={tour.id} >
                <div className='con'>
                <img src={tour.image} alt="not found" />
                <h1>{tour.title}</h1>
              {readMore ? tour.des : `${tour.des.substring(0,200)}...`}
              <span onClick={()=> setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Show more'}</span>
              <div className='but'> 
              <button>Not Interested</button>
              </div>
            </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default List