import { configureStore } from "@reduxjs/toolkit";
import markerSlice from "./markerSlice";
export const store = configureStore({
    reducer: {
        markedForLater: markerSlice
    }
})
