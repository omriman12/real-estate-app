import React, {Component} from 'react'
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom'
// import Grid from '@material-ui/core/Grid';
import { withStyles  } from '@material-ui/core/styles';

//components
import SliderSection from './components/SliderSection';
import PromotedAssetsSection from './components/PromotedAssetsSection';
import SearchAssetsSection from './components/SearchAssetsSection';


const styles = theme => ({
    
});

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section>
                    <SliderSection/>
                </section>
                <section>
                    <PromotedAssetsSection/>
                </section>
                <section>
                    <SearchAssetsSection/>
                </section>
            </React.Fragment> 
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);