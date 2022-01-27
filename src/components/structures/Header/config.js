export const headerStrings = {
    showDashboard : "showDashboard",
}
export const headerConstants = {
    SET_DASHBOARD : "SET_DASHBOARD",
}
export const headerReducer = (state = {

}, action) => {
    const {type, payload} = action;
    switch(type){
        case headerConstants.SET_DASHBOARD : 
            return {...state, ...payload};
        default : return {...state};
    }
}
export const HEADER_REDUCER_NAME = "headerReducer";
export {headerReducer as default};