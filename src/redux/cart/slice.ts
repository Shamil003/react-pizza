import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../store";
import {getCartFromLS} from "../../utils/getCartFromLS";
import {CartItem, CartSliceState} from "./types";
import {calcTotalPrice} from "../../utils/calcTotalPrice";

const initialState: CartSliceState = getCartFromLS()

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.item.find(obj => obj.id === action.payload.id)

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = calcTotalPrice(state.items);
        },

        minusItem(state, action: PayloadAction<string>) {
            const findItem = state.item.find(obj => obj.id === action.payload)
            if (findItem) {
                findItem.count--;
            }

        },

        removeItem(state, action: PayloadAction<string>) {
            state.items = state.items.filter(obj => obj.id !== action.payload);

        },
        clearItem(state, action) {
            state.items = [];
            state.totalPrice = 0;

        },

    },

});


export const { addItem,  removeItem, minusItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;