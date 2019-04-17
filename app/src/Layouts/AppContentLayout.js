import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    width: '100%',
    padding: '2em 1em',
    textAlign: 'right'
  },
};

function AppContentLayout(props) {
  const { classes } = props;
  return <div className={classes.root}>{props.children}</div>;
}

AppContentLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContentLayout);


