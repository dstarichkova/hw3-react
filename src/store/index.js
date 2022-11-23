import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {sectionSlice} from "./section";
import {bookSlice} from "./books";
import {cartSlice} from "./cart";
import {reviewSlice} from "./reviews";
import {userSlice} from "./users";

export const store = configureStore({
    reducer: combineReducers({
        section: sectionSlice.reducer,
        book: bookSlice.reducer,
        cart: cartSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});