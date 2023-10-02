import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link } from "react-router-dom";
import ImgSchool from "../../assets/images/IconSchool.svg";
import { Row } from "../../styles/style";
import styles from "./styles";
const useStyles = makeStyles(styles);

const BoxBig = props => {
  const { children, textRight, link } = props;
  const classes = useStyles();

  const headWithImage = () => (
    <Row id="space-between">
      <span className={`${classes.textRight}`}>
        {textRight}
      </span>
      <img
        src={ImgSchool}
        className={classes.iconHouse}
        alt="Icone da escola"
      />
    </Row>
  );


  const contentBox = () => {
    return (
      <>
        <div>{headWithImage()}</div>
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
