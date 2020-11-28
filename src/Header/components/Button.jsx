import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
root: {
  color: "white",
  background: "#0d0638",
  height: 68,
  padding: "0 50px",
  border: "none",
  borderRadius: 3,
  margin: "30px",
 
}

}))

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <>
      <Button
      classes={{
        root: classes.root
        
      }}
      variant= "contained"
      color="primary"
      href="#contained-buttons"
      >
        Pojď si zahrát
      </Button >

    </>
  );
}