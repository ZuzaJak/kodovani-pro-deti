import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

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

  const LinkBtn = () => {
    console.log ("funguju")


  }
  return (
    <Link to="/vyzkousej-to">
      <Button
      classes={{
        root: classes.root
      }}
      variant= "contained"
      color="primary"
      >
        Pojď si zahrát
      </Button >
      </Link>
    
  );
}