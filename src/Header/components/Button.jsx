import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({}))


export default function ContainedButtons() {
  const classes = useStyles();

  return (
      <Button variant="contained" color="primary" href="#contained-buttons">
        Pojd si zahrat
      </Button>
  );
}