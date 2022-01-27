import { componentReducers } from "../components"
import { includeReducers } from "../includes"
import UtilReducer from "./config"
export const appReducers = {
    UtilReducer,
    ...componentReducers,
    ...includeReducers
}