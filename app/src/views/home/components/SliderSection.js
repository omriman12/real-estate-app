import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import property_main_1 from '../../../assets/img/property_main_1.jpg';
import property_main_2 from '../../../assets/img/property_main_2.jpg';
import property_main_3 from '../../../assets/img/property_main_3.jpg';
import property_main_4 from '../../../assets/img/property_main_4.jpg';

const images = [
    {
      original: `${property_main_1}`,
      thumbnail: `${property_main_1}`,
    },
    {
      original: `${property_main_2}`,
      thumbnail: `${property_main_2}`,
    },
    {
      original: `${property_main_3}`,
      thumbnail: `${property_main_3}`,
    },
    {
      original: `${property_main_4}`,
      thumbnail: `${property_main_4}`,
    },
  ]
  
class SliderSection extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <ImageGallery items={images} showThumbnails={false}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default SliderSection;