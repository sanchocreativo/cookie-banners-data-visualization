import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Button as MaterialUIButton} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  RoundedButton: {
      fontFamily: `'IBM Plex Serif', serif`,
      borderRadius: 50,
      fontWeight: 600,
      border: "1px solid",
      borderColor: `rgb(201, 223, 232)`,
      backgroundColor: 'rgb(226, 241, 248)',
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: '16px',
      letterSpacing: 0,
      color: 'rgb(96, 120, 132)',
      padding: '10px',
      '&:hover': {
          opacity: '.7',
          backgroundColor: 'rgb(226, 241, 248)',
          boxShadow: 'none',
      },
  }
}));

const useStylesActive = makeStyles((theme) => ({
  RoundedButton: {
      fontFamily: `'IBM Plex Serif', serif`,
      borderRadius: 50,
      fontWeight: 600,
      border: "1px solid",
      borderColor: `rgb(201, 223, 232)`,
      backgroundColor: 'rgb(96, 120, 132)',
      boxShadow: 'none',
      color: 'white',
      textTransform: 'none',
      fontSize: '16px',
      letterSpacing: 0,
      padding: '10px',
      '&:hover': {
          opacity: '.7',
          backgroundColor: 'rgb(96, 120, 132)',
          boxShadow: 'none',
          color: 'white',
      },
  }
}));


const Button = ({text, isActive, onClick, id}) => {


  const classes = useStyles();

  const classesActive = useStylesActive();

  return (
    <MaterialUIButton
      variant="contained"
      onClick={() => onClick(id)}
      id={id}
      className={isActive ? classesActive.RoundedButton : classes.RoundedButton}
    >
      {text}
    </MaterialUIButton>
  );
};

export default Button;