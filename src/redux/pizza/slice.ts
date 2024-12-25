import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "../store";
import {SearchPizzaParams} from "./types";


const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR;
            state.items = [];
        });
    }

    // extraReducers: {
    //     [fetchPizzas.pending]: (state) => {
    //         state.status = 'loading';
    //         state.items = [];
    //     },
    //      [fetchPizzas.fulfilled]: (state, action) => {
    //         state.items = action.payload;
    //         state.status = 'success'
    //     },
    //     [fetchPizzas.rejected]: (state, action) => {
    //         state.status = 'error';
    //         state.items = [];
    //     },

});


export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;