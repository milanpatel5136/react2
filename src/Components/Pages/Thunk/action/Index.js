export const Plus = (payload) => ({
    type: "PLUS",
    payload
})

export const Minus = (payload) => ({
    type: "MINUS",
    payload
})

export const getUserListStarter = () => ({
     type: "Started",
})

export const getUserListSuccess = (payload) => ({
    type: "GET_USER_SUC",
    payload
})

export const getUserListFailure = (payload) => ({
    type: "GET_USER_FAILED",
    payload
})


export const AsncMinus = num => {
    return dispatch => {
        setTimeout(()=> {
            dispatch({
                type: "MINUSCounter",
                payload: num 
            });
        }, 1000);
    };
};

export const getUserList =(page = 1) => async dispatch => {
    dispatch(getUserListStarter());
  try {
    const res = await fetch(`https://reqres.in/api/users?page=${page}`);
    const data = await res.json();
    dispatch(getUserListSuccess(data));
  } catch (err) {
    dispatch(getUserListFailure(err.message));
  }
} 