const initialState = {

    data: [],
    isLoadding: false,
    error:  {},

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'FETCH_POST_SUCCESS':
    return { ...state, isLoadding : false, data: payload }

    case 'FETCH_POST_FAILED':
        return { ...state, isLoadding : false, error: payload }
 
    case 'FETCH_POST_REQUEST':
        return { ...state, isLoadding : true,  }
        


  default:
    return state
  }
}
