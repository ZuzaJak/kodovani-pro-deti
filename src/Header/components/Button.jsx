import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  const Button = () => {
    return (
      <Button variant="contained" color="primary" href="#contained-buttons">
        Pojď si zahrát </Button>
  );
};
