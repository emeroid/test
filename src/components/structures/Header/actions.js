import { headerConstants } from "./config";

export const headerActions = {
    payload : payload => dispatch => dispatch({
        type : headerConstants.SET_DASHBOARD,
        payload
    })
}