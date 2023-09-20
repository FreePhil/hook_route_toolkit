import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootSlice";
import { inventoryReducer } from "./inventorySlice";

export const store = configureStore({
  reducer: {
    root: rootReducer,
    inventory: inventoryReducer,
  },
});
