import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./slices/covidSlice"

const store  = configureStore({
    reducer: covidReducer
})

export default store