import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

const styledBy = (property, mapping) => props => mapping[props[property]];

const styles = {
  root: {
    height: '100%',
    width: '100px',
    fontWeight: 'bold',
    color: grey[100],
    backgroundColor: styledBy("isActive", {
      true: grey[500],
      false: 'transparent'
    }),
    "&:hover": {
      backgroundColor: grey[500]
    }
  },
};

function HeaderButtonDesktop(props) {
  const { classes } = props;
  return <Button component={props.component} to={props.to} className={classes.root} color={props.color}>{props.children}</Button>;
}

HeaderButtonDesktop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderButtonDesktop);


