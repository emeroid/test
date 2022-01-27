import React from 'react'
import { makeStyles } from '@material-ui/core'

const style = makeStyles(theme => ({
    root : {
        display : "flex",
        height : "100vh",
        alignItems : "center",
        justifyContent : "center",
    }
}))
function Fallback(props) {
    const classes = style();
    return (
        <div className={classes.root}>
            Loading...
        </div>
    )
}
Fallback.propTypes = {
    
}
export default Fallback;
export {Fallback};