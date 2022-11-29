import React from 'react'

export default function PropsRow(data) {
  return (
    <div className='col-3'>
    <div class="card" >
  <img src={data.record.image}  class="card-img-top" className='w-25' alt="..." />
  <div class="card-body">
    <h5 class="card-title">{data.record.title}</h5>
    <p class="card-text">{data.record.description}</p>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  </div>
</div>
</div>


  )
}
