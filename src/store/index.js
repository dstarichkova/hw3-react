import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {sectionSlice} from "./section";
import {bookSlice} from "./books";
import {cartSlice} from "./cart";

export const store = configureStore({
    reducer: combineReducers({
        section: sectionSlice.reducer,
        book: bookSlice.reducer,
        cart: cartSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});