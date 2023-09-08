import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
import IconSchedule from "../../assets/images/calendarSchedule.svg";
const useStyles = makeStyles(styles);

const BoxDiscriptionSchedule = props => {
  const { title, subtitle } = props;
  const classes = useStyles();
  return (
    <div className={`${classes.boxDescriptionSchedule} ${classes.floatLeft}`}>
      <div
        className={`${classes.boxQuantity} ${classes.floatLeft} ${classes.boxQuantityBackground}`}
      >
        <img src={IconSchedule} alt="" className={`${classes.widthImg}`} />
      </div>
      <div className={classes.floatLeft}>
        <div className={classes.boxDescriptionSchedule}>{title}</div>
        <div className={classes.boxDescriptionScheduleSubtitle}>{subtitle}</div>

      </div>
    </div>
  );
};

export default BoxDiscriptionSchedule;
