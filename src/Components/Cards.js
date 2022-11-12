import React, { useState } from 'react'
import reviews from './Pages/data'


export default function Cards() {

  const [index,setindex] = useState(0)
  
  const pre = ()  => {
     if (index<=1) {
      setindex(index=1)
     }
  }

  const Next = () => {
    if (index<=-1)
     setindex(index=-1)
  }

  return (
    <div>
       <article class="review">
          <div class="img-container">
            <img src={reviews[index].img} id="person-img" alt="" />
          </div>
          <h4 id="author">{reviews[index].name}</h4>
          <p id="job">{reviews[index].job}</p>
          <p id="info">
            {reviews[index].text}
          </p>
        
          <div class="button-container">
            <button class="prev-btn" onClick={pre}>
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="next-btn" onClick={Next}>
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
         
          <button class="random-btn">surprise me</button>
        </article>
    </div>
                            
  )
}
