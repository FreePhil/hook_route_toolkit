import { createSlice } from '@reduxjs/toolkit';

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    location: 'Taipei',
    capacity: 1000,
  },
  reducers: {
    changeInventoryLocation: (state, action) => { state.location = action.payload },
    increaseCapacity: (state, action) => { state.capacity += 200 },
    decreaseCapacity: (state, action) => { state.capacity -= 200 }
  }
})

export const inventoryReducer = inventorySlice.reducer;
export const { changeInventoryLocation, increaseCapacity, decreaseCapacity } = inventorySlice.actions;