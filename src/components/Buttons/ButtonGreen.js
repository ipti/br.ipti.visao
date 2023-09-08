import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";

const useStyles = makeStyles(styles);

const ButtonGreen = props => {
  const classes = useStyles();
  return (
    <button className={`${classes.buttomGreen}` } {...props}>
      {props.title}
    </button>
  );
};

export default ButtonGreen;
