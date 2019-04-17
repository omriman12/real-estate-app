import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';

const styles = {
  root: {
    width: '100%',
    padding: '2% 5% 2% 2%',    
    backgroundColor: grey[300],
    textAlign: 'right',
    borderBottom: `1px solid ${grey[500]}`,
    borderTop: `1px solid ${grey[500]}`,
  },
};

function AppTitleLayout(props) {
  const { classes } = props;
  return <div className={classes.root}>{props.children}</div>;
}

AppTitleLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppTitleLayout);


