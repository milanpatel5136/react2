import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {

    return {
        count : state.counter
    }
}

const mapDispatchToProps = (dispatch)=>{

    return {

        increment : ()=> dispatch({type:'INCREMENT'}),

    }


}
 function MyFunR2({count,increment}) {
  return (
    <div>{count}
    <button onClick={()=> {increment() }}>Plus</button>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (MyFunR2)



