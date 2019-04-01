import React, {Component} from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import grey from '@material-ui/core/colors/grey';

import { withStyles  } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { List, ListItem } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/PhoneInTalk';
import EmailIcon from '@material-ui/icons/Email';
import LocationIcon from '@material-ui/icons/LocationOn';

//components
import AppUrls from '../../model/constants/AppUrls';

const styles = theme => ({
  footerMain: {
    color: grey[500],
    backgroundColor: grey[900],
    height: 'inherit',
  },
  footerContentWrapper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    // maxWidth: 500,
    width: '70%',
  },
  footerColumnTitle:{
    color:'white',    
    textTransform: 'uppercase',
    borderBottom: '2px solid',
    borderColor: '#947054',
    lineHeight: '1.8',
    display: 'inline-block',
    fontWeight: 'bold'
  },
  hoursWrapper:{
  },
  hoursRow:{
    borderBottom: '2px solid',
    lineHeight: '1.8',
    display: 'flex',
    justifyContent: 'space-between',
    paddingLeft: 0,
    paddingRight: 0
  },
  contactRow:{
    paddingBottom: theme.spacing.unit * 1.5,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  contactRowTitle:{
    marginRight: theme.spacing.unit
  },
  linksWrapper:{
    float: 'right'
  }
});

class Footer extends Component {

  mapHoursRow(classes, leftText, rightText){
      return <ListItem className={classes.hoursRow}>
        <Typography color='inherit'>{leftText}</Typography>
        <Typography color='inherit'>{rightText} </Typography>
      </ListItem>
  }

  render() {
    let classes = this.props.classes;
    
    return (
      <div className={classes.footerMain}>
        <div className={classes.footerContentWrapper}>
          <Grid container spacing={40}>
            <Grid item xs={4} sm={4} md={4}>
              <Grid container direction="column" spacing={40}>
                <Grid item >
                    <Typography className={classes.footerColumnTitle}>אודות</Typography>
                </Grid>
                <Grid item>
                    אנו חברת תיווך
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Grid container direction="column" spacing={40}>
                <Grid item >
                    <Typography className={classes.footerColumnTitle}>שעות פעילות</Typography>
                </Grid>
                <Grid item>
                    <List className={classes.hoursWrapper}>
                      {this.mapHoursRow(classes, 'ראשון - חמישי', '9:00 - 17:00')}
                      {this.mapHoursRow(classes, 'שישי', '9:00 - 13:00')}
                      {this.mapHoursRow(classes, 'שבת', 'סגור')}                      
                    </List>
                </Grid>
                <Grid item>
                  <div className={classes.contactRow}>
                      <Typography color='inherit' className={classes.contactRowTitle}>054-1234567</Typography>
                      <PhoneIcon/>
                  </div>
                  <div className={classes.contactRow}>
                      <Typography color='inherit' className={classes.contactRowTitle}>email@gmail.com</Typography>
                      <EmailIcon/>
                  </div>
                  
                  <div className={classes.contactRow}>
                      <Typography color='inherit' className={classes.contactRowTitle}>העליה 12, ת"א 68354</Typography>
                      <LocationIcon/>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
              <Grid container direction="column" spacing={40}>
                <Grid item >
                    <Typography className={classes.footerColumnTitle}>לינקים חשובים</Typography>
                </Grid>
                <Grid item>
                  <List className={classes.linksWrapper}>
                    <ListItem>
                      <Button color="inherit" component={Link} to={AppUrls.Home.Root}>ראשי</Button>
                    </ListItem>
                    <ListItem>
                      <Button color="inherit" component={Link} to={AppUrls.Assets.Root}>נכסים</Button>
                    </ListItem>
                    <ListItem>
                      <Button color="inherit" component={Link} to={AppUrls.Contact.Root}>צור קשר</Button>
                    </ListItem>
                    <ListItem>
                      <Button color="inherit" component={Link} to={AppUrls.About.Root}>אודות</Button>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    ) 
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
