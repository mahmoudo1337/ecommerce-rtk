import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Components/CartSlice'

const store = configureStore({
    redurcer: {
        cart: cartReducer
    },
})

export default store