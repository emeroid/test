import React from 'react'
import classNames from 'classnames';
//import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core'
import { Header, Footer} from './structures'
import { Route } from 'react-router-dom';
//import CustomGlobalPopover from '../includes/CustomPopover/CustomPopover';
//import NetworkStatus from './NetworkStatus/NetworkStatus';


const style = makeStyles(({breakpoints, colors}) => ({
    root : {
    },
    display : {
    },
    appPager : {
        margin : "0px 20px",
        minHeight : 300,
    },
    stage : {
        marginTop : 70,
        marginBottom : 50,
        minHeight : 200,
        
    }
}))
function Layout({component : Component, ...props}) {
    const classes = style();
    return (
        <Route {...props} className={classes.root} component={routeProps=>{
            return <div className={classes.display}>
                <Header
                    classes={{
                        container : classes.appPager
                    }}
                />
                <div className={classNames(classes.appPager, classes.stage)}>
                    <Component {...routeProps} />
                   
                </div>
                
                <Footer classes={{
                        container : classes.appPager
                    }}/>
                
            </div>
        }}/>
    )
}
Layout.propTypes = {
    
}
export default Layout;
export {Layout};