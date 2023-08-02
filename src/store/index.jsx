import {createStore, combineReducers} from "redux";
import { customerReducer } from "./customerReducer";

export const store = createStore(customerReducer)