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
        '&:hover': {
            opacity: '.7',
            backgroundColor: 'rgb(226, 241, 248)',
            boxShadow: 'none',
        },
    }
}));
const Button = ({text, isActive}) => {

  const classes = useStyles();
  return (
    <MaterialUIButton
      variant="contained"
      className={classes.RoundedButton}
    >
      {text}
    </MaterialUIButton>
  );
};

export default Button;