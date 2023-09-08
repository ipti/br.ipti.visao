import React from "react";
import { Pagination } from "semantic-ui-react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./styles";
const useStyles = makeStyles(styles);

const Paginator = props => {
  const { handlePage, pagination } = props;
  const classes = useStyles();

  return (
    <Pagination
      boundaryRange={0}
      defaultActivePage={props.activePage}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={2}
      onPageChange={handlePage}
      totalPages={pagination?.totalPages ?? 0}
      className={classes.root}
    />
  );
};

export default Paginator;
