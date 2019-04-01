import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
// import grey from '@material-ui/core/colors/grey';

const styles = {
  root: {
    width: '100%',
    paddingTop: '75px',
    backgroundColor: '#fff5f8'
  },
};

function AppLayout(props) {
  const { classes } = props;
  return <div className={classes.root}>{props.children}</div>;
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLayout);


