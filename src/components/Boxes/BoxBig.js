import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImgSchool from "../../assets/images/school-icon.png";
import { Link } from "react-router-dom";
import styles from "./styles";
import { Clear } from "@material-ui/icons";
const useStyles = makeStyles(styles);

const BoxBig = props => {
  const { children, title, subtitle, textRight, link } = props;
  const classes = useStyles();

  const headWithImage = () => (
    <div>
      <img
        src={ImgSchool}
        className={classes.iconHouse}
        alt="Icone da escola"
      />
      <span className={`${classes.floatRight} ${classes.textRight}`}>
        {textRight}
      </span>
    </div>
  );

  const headWithoutImage = () => (
    <div className={classes.boxWithoutImage}>
      {!textRight && (
        <>
          <div className={classes.title} title={title}>{title}</div>
          <div className={classes.title} title={subtitle}>{subtitle}</div>
        </>
      )}
      {textRight && (
        <>
          <span className={classes.title}>{title}</span>
          
          <Clear className={`${classes.floatRight} ${classes.iconDelete}`} onClick={() => props.deleteSchedule(props.id)} />
        </>
      )}
    </div>
  );

  const contentBox = () => {
    return (
      <>
        <div>{title ? headWithoutImage() : headWithImage()}</div>
        <div>{children}</div>
      </>
    );
  };

  const Box = () => {
    if (link) {
      return (
        <Link
          to={link ? link : "#"}
          className={`${classes.contentBox} ${classes.floatLeft}`}
        >
          {contentBox()}
        </Link>
      );
    }

    return (
      <div className={`${classes.contentBox} ${classes.floatLeft}`}>
        {contentBox()}
      </div>
    );
  };

  return Box();
};

export default BoxBig;
