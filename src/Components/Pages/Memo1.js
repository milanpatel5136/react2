import React from 'react'

 function Memo1(data) {
    console.log('mmm',data)
  return (
    <div> Memo1 </div>
  )
}

export default React.memo (Memo1)
