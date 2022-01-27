import React from 'react'
import classNames from 'classnames';
import { AppBar, makeStyles, Toolbar} from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';


const style = makeStyles(theme => ({
    toolbar : {
        backgroundColor : 'white',
        //borderBottom : `solid 1px #8BA663`,
        color: 'black'
    },
    container : {
        display : "flex",
        width : "100%",
        alignItems : "center",
    },
    pointer: {
        cursor: "pointer",
        "&:hover": {
            color: 'blue',
        }
    },
    navSpacing : {
        marginLeft: theme.spacing(2),    
    },
    textSubheading: {
        fontWeight: "bold",
      },
    alignRight : {
        width: `20%`,
        display: 'flex',
        justifyContent : "flex-end"
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'blue'
    },
    center : {
        width: `70%`,
        display: 'flex',
        justifyContent : "center"
    },
}));


function Header(props) {
    const classes = style();

    return (
        <div className={classes.root}>
            <AppBar elevation={0} classes={{
                colorPrimary : classes.toolbar
            }}>
                <Toolbar>
                    <div className={classes.container}>
                    { /* Desktop version  **/}
                       
                        <div className={classNames(classes.navSpacing, classes.pointer)} >
                                <div className={classNames(classes.heading)}> CodDrops</div>
                        </div>
                            
                        <div className={classNames(classes.center, classes.textSubheading)}>
                                <div className={classNames(classes.navSpacing, classes.pointer)} >
                                        <div style={{ margin: 2 }}>Tutorials</div>
                                </div>
                                <div className={classNames(classes.navSpacing, classes.pointer)}>
                                    <div style={{ margin: 2 }}>Playground</div>
                                </div>

                                <div className={classNames(classes.navSpacing, classes.pointer)}>
                                    
                                    <div style={{ margin: 2 }}>Articles</div>
                                </div>

                                <div className={classNames(classes.navSpacing, classes.pointer)} >
                                    
                                    <div style={{ margin: 2 }}>Collective</div>
                                </div>
                                <div className={classNames(classes.navSpacing, classes.pointer)} >
                                   
                                    <div style={{ margin: 2 }}>CSS Reference</div>
                                </div>
                        </div>

                        <div className={classNames(classes.alignRight, classes.textSubheading)}>
                                <div className={classNames(classes.navSpacing, classes.pointer)} >
                                        <div>Tw</div>
                                </div>
                                <div className={classNames(classes.navSpacing, classes.pointer)}>
                                    <div>Fb</div>
                                </div>

                                <div className={classNames(classes.navSpacing, classes.pointer)}>
                                    <div>Gh</div>
                                </div>

                                <div className={classNames(classes.navSpacing, classes.pointer)} >
                                    <div>In</div>
                                </div>
                                <div className={classNames(classes.navSpacing, classes.pointer)} >
                                    <div>RSS</div>
                                </div>
                        </div>

                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
Header.propTypes = {
    
}
export default withWidth()( Header);
export { Header } ;