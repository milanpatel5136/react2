import { configureStore } from "@reduxjs/toolkit";
import Redusertool from "../Redusertool";
export const storetool = configureStore({
    reducer : {
        counter: Redusertool
    },
});