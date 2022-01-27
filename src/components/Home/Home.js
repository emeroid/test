import React from 'react';
import classNames from 'classnames';
//import PropTypes from 'prop-types';
//import { useDispatch } from 'react-redux';
import { makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { routeNames } from '../../utils';


const style = makeStyles(theme => ({
    root : {
        minHeight : 200,
        paddingTop: 70,
        display : 'flex',
        alignItems : "center",
        justifyContent : "start",
    },
   
    headingText: {
        fontSize: `3vw`,
    },
    subText: {
        fontSize: 22,
        fontFamily: 'fantasy',
        textAlign:'left'
    },
    headingTextMargin: {
        paddingLeft: 60,
        paddingRight: 60,
    },
    spacingTop: {
        marginTop: 40
    },
    text: {
        fontSize: 18,
    },
    pointer: {
        cursor: "pointer",
        background: 'grey'
      },
}))

const dataLeft = [
    {
        text: [{p: ""}],
        image: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2021/12/columscroll_feat.jpg" 
    },
    {
        text: [{p: "Grids are truly magical. There’s so many different kind of things we can do with them; layout-wise and scroll-wise. Some time ago, I came across Giulia Tonon’s amazing website. It was made by the amazing duo of ET Studio. The unique design is enhanced by the exquisite motion of the columns: while scrolling, the middle column scrolls one way, while the outer ones scroll the other way."},{p: "This is something that I thought would be interesting to build upon using Locomotive Scroll and combine it with a little idea of flying grid items. Once we click on a grid item, it animates to the center of the screen while scaling up. The other grid items move to their respective positions in the row of thumbnails beneath the main image. This kind of animation is highly inspired by the work of Aristide Benoist who is the master of delicate view switching motions and unique layout animations."},{p: "This is the initial view:"}],
        image: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2021/12/columscroll1.jpg"
    },
    {
        text: [{p: "When clicking on a image, we move it to the center and animate all other images in the viewport to the little thumbnail navigation:"}],
        image: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2021/12/columscroll2.jpg"
    },
    {
        text: [{p: "And this is how all the motion flow looks like:"}],
        video: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2021/12/columns1_opt.mp4"
    },
];

const dataRight = [
    {
        image: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2022/01/Kan_Shortcut.png" 
    },
    {
        image: "https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2021/09/Mailchimp_V2.jpg"
    },
    {
        image: "https://s3.buysellads.com/creatives/875c36d32542ba440a60f0af9db4b1e5-1520579036.png"
    },
];


function Home(props) {
    //const dispatch = useDispatch(),
        
    const classes = style();
    return (
        <div className={classes.root}>
            <Grid container className={classes.container} spacing={5}>
                <Grid item xs={8}>
                    <Grid container justifyContent="start" spacing={0}>
                        <Typography className={classes.headingText} >
                                    Alternate Column Scroll Animation
                        </Typography>
                        <p className={classes.text} >
                                    A grid layout with columns that scroll in opposite directions and a content preview animation.
                        </p>

                        <Typography component={"blockquote"} style={{marginBottom: 30}}>
                                By Mary Lou in Playground on December 21, 2021
                        </Typography>
                        {dataLeft.map((item) =><Grid item>
                                {item.text.map((paragraph) => <Typography component={"h4"} style={{marginBottom: 40}}>
                                   {paragraph.p}
                                </Typography>)}
                                {item.video ? <video style={{width: '100%', marginBottom: 50}} src={item.video} controls autoplay="true" /> : <img style={{width: '100%', marginBottom: 50}} src={item.image} />}
                        </Grid>)}
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                        {dataRight.map((item) => <Grid item xs={12}  style={{width: '100%'}}>
                            <img style={{width: '100%', marginBottom: 20}} src={item.image} />
                        </Grid>)}
                </Grid>

            </Grid>
        </div>
    )
}
Home.propTypes = {
    
}
export default Home;
export {Home};