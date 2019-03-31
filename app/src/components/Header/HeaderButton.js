import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';

const styledBy = (property, mapping) => props => mapping[props[property]];

const styles = {
  root: {
    height: '100%',
    color: 'white',
    backgroundColor: styledBy("isActive", {
      true: grey[500],
      false: 'transparent'
    }),
    "&:hover": {
      backgroundColor: grey[500]
    }
  },
};

function HeaderButton(props) {
  const { classes } = props;
  console.log(props)
  console.log(styles)
  return <Button component={props.component} to={props.to} className={classes.root} color={props.color}>{props.children}</Button>;
}

HeaderButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderButton);


