import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
};

export const Redusertool = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state)=>{
        state.value += 1;
    },

    dicrement: (state)=> {
        if(state.value > 0){
        state.value -= 1;
    }
    },

    incrementByAmount: (state,action) =>{
        state.value +=  parseInt(action.payload);
    }
  }
});

export const { increment, dicrement, incrementByAmount } = Redusertool.actions

export default Redusertool.reducer