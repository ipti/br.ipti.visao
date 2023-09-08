import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

const BoxDiscriptionClassroom = props => {
  const {title, pre_registration} = props;
  const classes = useStyles();

  return (
    <div
      className={`${classes.boxDescriptionCalssroom} `}
      style={{marginBottom: "-10px"}}
    >
      <p>Inscrições: {pre_registration.length}</p><p>{title}</p> 
    </div>
  );
};

export default BoxDiscriptionClassroom;
