import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import AppBar from "@material-ui/core/AppBar";
import { withStyles  } from '@material-ui/core/styles';
// import { makeStyles } from '@material-ui/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CenterFocusStrong } from '@material-ui/icons';
import AppUrls from '../../model/constants/AppUrls';
import HeaderButton from './HeaderButton';


const styles = {
  appBar: {
    'height': '75px',
    'background-color': '#28282a'
  },
  toolBar: {
    'height': '100%',
    // 'display': 'flex',
    // 'justify-content': 'center'
  },
  logo: {
    'margin-right': '30%'
  },
  logo: {
    'margin-right': '30%'
  },

};

class Header extends Component {
  render() {
    console.log(this.props);
    let pathName= window.location.pathname;
    let pathNameLower = pathName ? pathName.toLowerCase() : '';
    console.log(pathName);
    
    return (
      <AppBar position="fixed" className={this.props.classes.appBar}>
          <Toolbar className={this.props.classes.toolBar}>
            <Button className={this.props.classes.logo} color="inherit" component={Link} to={AppUrls.Home.Root}>נדל"ן המאה</Button>
            <HeaderButton isActive={pathNameLower === AppUrls.Assets.Root.toLocaleLowerCase()} color="inherit" component={Link} to={AppUrls.Assets.Root}>נכסים</HeaderButton>
            <HeaderButton isActive={pathNameLower === AppUrls.About.Root.toLocaleLowerCase()} color="inherit" component={Link} to={AppUrls.About.Root}>אודות</HeaderButton>
            <HeaderButton isActive={pathNameLower === AppUrls.Contact.Root.toLocaleLowerCase()} color="inherit" component={Link} to={AppUrls.Contact.Root}>צור קשר</HeaderButton>
          </Toolbar>
      </AppBar>
    ) 
  }
}

Header.propTypes = {
  // classes: PropTypes.object.isRequired,
};
// export default Header;

export default withStyles(styles)(Header);
