import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    base: 'medium',
    crust: 'classic_thin',
    sauce: 'no_sauce',
    cheese: 'no_cheese', 
  },
  reducers: {
    chooseBase: (state, action) => { state.base = action.payload },
    chooseCrust: (state, action) => { state.crust = action.payload },
    chooseSauce: (state, action) => { state.sauce = action.payload },
    chooseCheese: (state, action) => { state.cheese = action.payload },
    reset: (state, action) => { state = this.initialState }
  }
})

export const rootReducer = rootSlice.reducer;
export const { chooseBase, chooseCrust, chooseSauce, chooseCheese, reset } = rootSlice.actions;