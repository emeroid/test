export const UtilStrings = {
    appDomain : "appDomain",
    appFrontend : "appFrontend",
    processMsg : "processMsg",
    processComponent : "processComponent",
    storageNetworkID : "NetworkId",
    storageNetworkType : "storageNetworkType",
    storageNetworkWallet : "storageNetworkWallet",
    refreshCount : "refreshCount",
}
export const UtilConstants = {
    SET_UTILS : "SET_UTILS",
}
export const UtilReducer = (state={
    [UtilStrings.refreshCount] : 0
}, action) => {
    const {type, payload} = action;
    switch(type){
        case UtilConstants.SET_UTILS : 
            return {...state, ...payload};
        default : return {...state};
    }
}
export const UTIL_REDUCER_NAME = "UtilReducer";
export {UtilReducer as default};