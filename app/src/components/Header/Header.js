import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import AppBar from "@material-ui/core/AppBar";
import { withStyles  } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';
import grey from '@material-ui/core/colors/grey';

//components
import AppUrls from '../../model/constants/AppUrls';
import HeaderButtonDesktop from './HeaderButtonDesktop';



const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    height: '75px',
    // backgroundColor: 'rgba(0, 0, 0, 0.4)'
    backgroundColor: grey[900]
  },
  toolBar: {
    height: '100%',
  },
  // logo: {
  //   'margin-right': '50%'
  // },
  navBarItemsDesktop: {
    height: '100%',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  navBarItemsMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class Header extends Component {
  render() {
    let pathName= window.location.pathname;
    let pathNameLower = pathName ? pathName.toLowerCase() : '';
    let classes = this.props.classes;
    
    return (
      <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Button className={classes.logo} color="inherit" component={Link} to={AppUrls.Home.Root}>נדל"ן המאה</Button>

            <div className={classes.grow} />
            <div className={classes.navBarItemsDesktop}>
              <HeaderButtonDesktop isActive={pathNameLower === AppUrls.About.Root.toLocaleLowerCase()} color="inherit" component={Link} to={AppUrls.About.Root}>אודות</HeaderButtonDesktop>
              <HeaderButtonDesktop isActive={pathNameLower === AppUrls.Contact.Root.toLocaleLowerCase()} color="inherit" component={Link} to={AppUrls.Contact.Root}>צור קשר</HeaderButtonDesktop>
              <HeaderButtonDesktop isActive={pathNameLower === AppUrls.Assets.Root.toLocaleLowerCase()} color="inherit" component={Link} to={AppUrls.Assets.Root}>נכסים</HeaderButtonDesktop>
              <HeaderButtonDesktop isActive={pathNameLower === AppUrls.Home.Root.toLocaleLowerCase()} color="inherit" component={Link} to={AppUrls.Home.Root}>ראשי</HeaderButtonDesktop>
            </div>
            <div className={classes.navBarItemsMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
      </AppBar>
    ) 
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
