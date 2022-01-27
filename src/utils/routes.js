import React from 'react';
import { routeNames } from "./routeNames"

const Home = React.lazy(() => import("../components/Home/Home"));
    
export const routes = [
    { path : routeNames.home, exact : true, component : Home}
];

/**
 * 404 page must be the last index in this array and it is without a path
*/
//export const headerlessRoutes = [
//    { exact : true, component : Error404Page},
//]