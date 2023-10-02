import React, { useState } from 'react';
import data from './Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function List() {
  const [tours, setTours] = useState(data);
  const [readMore, setReadMore] = useState(false);

  const handleDelete = (id) => {
    setTours((oldTours) => {
      return oldTours.filter((tour) => tour.id !== id);
    });
  };

  return (
    <div className='tainer'>
      <div className='box'>
        <h2>Our Tours</h2>
        {tours.length === 0 ? (
          <div className='no-tours-message'>
            <div className='no-tours-icon'>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <p className='no-tours-text'>Nothing to display</p>
          </div>
        ) : (
          tours.map((tour) => (
            <div key={tour.id}>
              <div className='con'>
                <img src={tour.image} alt='not found' />
                <h1>{tour.title}</h1>
                <p>{readMore ? tour.des : `${tour.des.substring(0, 200)}...`}
                <span onClick={() => setReadMore(!readMore)}>
                  {readMore ? 'Show Less' : 'Show more'}
                </span>
                </p>
                <div className='but'>
                  <button onClick={() => handleDelete(tour.id)}>
                    Not Interested
                  </button>
                  <div className='price-circle'>
                ${tour.price} 
              </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default List;
