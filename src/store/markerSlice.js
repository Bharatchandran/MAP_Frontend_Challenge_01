import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    marked: []
}

const markerSlice = createSlice({
    name:'markedForLater',
    initialState,
    reducers: {
        markForLater: (state,action) => {
            console.log(action.payload)
            const marked = {
                markedId: action.payload
            }
            console.log(marked);
            state.marked.push(marked)
            console.log(state.marked);
        },
        removeMarkedForLater: (state, action) => {
            state.marked = state.marked.filter((mark) => mark.markedId !== action.payload)
        }
    }
})

export const {markForLater, removeMarkedForLater} = markerSlice.actions
export default markerSlice.reducer