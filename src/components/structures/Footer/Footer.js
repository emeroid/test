import React from 'react'
import { makeStyles, Grid, Typography} from '@material-ui/core';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


const style = makeStyles(theme => ({
    footerBasic: {
       flex: 1,
       background: 'lightgrey',
       minHeight : 120,
       marginTop: 55,
       width:'100%',
       padding: `50px 34px 22px 34px`,
       color: '#000',
       borderRadius: 5,
    },
    mouse: {
        cursor: "pointer",
        "&:hover": {
            color: 'blue',
        }
    },
    image: {
        width: '90%',
    },
    marginBottom: {
        marginBottom: 30,
    },
    
}));

const data = [
    {
        text: [{p: "About"},{p: "Contact"},{p: "Advertise"},{p: "Privacy Policy"},{p: "License"}]
    },
    {
        text: [{p: "Tutorials"},{p: "Articles"},{p: "Playground"},{p: "Blue Prints"},{p: "Freebies"}]
    },
    {
        text: [{p: "CSS Reference"},{p: "Collective"},{p: "Newsletter"},{p: "Archieves"},{p: "Deals"}]
    },
    {
        text: [],
        image: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2021/05/farm.jpg"
    },
    {
        text: [{p: "Content delivered by: Emeroid"},{p: "© Codrops 2022"}]
    },
];

function Footer(props) {
    const classes = style();

    return (
            <Grid container spacing={0} className={classes.footerBasic}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center">
                        {data.map((item) => <Grid item xs={2}>
                        {item.image ? <img className={classNames(classes.mouse, classes.image)} src={item.image} /> : item.text.map((paragraph) => <Typography component={"p"} className={classNames(classes.mouse, classes.marginBottom)}>{paragraph.p}</Typography>)}
                        </Grid>)}
                    </Grid>
                </Grid>
                
            </Grid>
    )
}
Footer.propTypes = {
    
}
export default Footer;
export { Footer };