import { connect } from 'react-redux'
import React from 'react'
const mapStateToProps = (state) => {

    return {

        count : state.counter
    }

}



function MyFunR1({count,dispatch}) {

  

    const increment = ()=> {
        
        dispatch({type: 'PLUS'});

    }
  return (
    <div>
          {count}
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default connect(mapStateToProps)(MyFunR1)
