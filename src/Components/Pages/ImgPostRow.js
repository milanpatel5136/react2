import React from 'react'

export default function Imgpostrow(data) {
  return (
    <div class ="col-2">
    <div class="card">
        <img src={data.record.url} class="card-img-top" className='w-5' alt=' '/>
    </div>
    </div>
  )
}
