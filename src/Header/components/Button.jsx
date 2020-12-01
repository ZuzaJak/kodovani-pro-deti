import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    background: '#0d0638',
    height: '4rem',
    padding: '0 50px',
    border: 'none',
    borderRadius: 4,
    margin: '30px',
    fontSize: '1.5rem',
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  const LinkBtn = () => {
    consol.log('funguju');
  };
  return (
    <Link to="/vyzkousej-to/1" style={{ textDecoration: 'none' }}>
      <Button
        classes={{
          root: classes.root,
        }}
        variant="contained"
        color="primary"
      >
        Pojď si zahrát <ArrowForwardIosIcon />
      </Button>
    </Link>
  );
}
