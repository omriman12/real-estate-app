import React, { Component } from 'react';
//material ui
import Grid from '@material-ui/core/Grid';
import { withStyles  } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Slider from "react-slick";
// import Slider from "../../../src/slider";

import feature1 from '../../../assets/img/feature1.jpg';
import feature2 from '../../../assets/img/feature2.jpg';
import feature3 from '../../../assets/img/feature3.jpg';


const styles = theme => ({
    promoredsession: { width: '100%' },
    promoredwrapper: { padding: theme.spacing.unit * 2, margin: 'auto', width: '80%' },
    propertyTitle:{ fontSize:30,textTransform:'uppercase',marginBottom:5,color:'#323232'},
    card: { maxWidth: 345 },
    media: { height: 240 },
    prpminidesc: {color:'#947054',fontSize:14,marginBottom:35,marginTop:0,fontStyle:'italic',fontWeight:600}
});

class PromotedAssetsSection extends Component {
    render() {
        let classes = this.props.classes;
        
        var settings = {
            // dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
        <div className={classes.promoredsession}>
            <div className={classes.promoredwrapper}>
            <React.Fragment>
                <Grid container justify = "center">
                        <div>
                            <h2 className={classes.propertyTitle} >Featured Properties</h2>
                            <p className={classes.prpminidesc}>Suspendisse dictum enim sit amet libero malesuada feugiat.</p>
                        </div>
                </Grid>
               
                    <Slider {...settings}>
                        <div>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={feature1}
                                title="feature1"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                        </div>
                        <div>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={feature2}
                                title="feature2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                        </div>
                        <div>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={feature3}
                                title="feature3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                        </div>
                        <div>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={feature2}
                                title="feature2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                        </div>
                        <div>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={feature3}
                                title="feature3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                        </div>
                        <div>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={feature2}
                                title="feature2"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                        </div>
                        <div>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={feature3}
                                title="feature3"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card> 
                        </div>
                    </Slider>                    
               
                </React.Fragment>   
            </div>
        </div>
        
        ); 
    }
}

PromotedAssetsSection.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(PromotedAssetsSection); 
