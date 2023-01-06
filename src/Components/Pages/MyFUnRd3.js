import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
      count: state.counter
    }
  }

const Increment = ()=> {

    return {  type: "INCREMENT" };

}



 function MyFunRd3(data) {

  console.log(data);

  return (
    <div>{data.count}

        <button onClick={()=> {
            data.Increment()
        }}>PLUS</button>
    
    </div>
  )
}

export default connect(mapStateToProps,{Increment}) (MyFunRd3)