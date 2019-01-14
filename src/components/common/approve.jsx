import React from "react";

const Approve = props => {
  let classes = "fa fa-circle";
  if (props.approved_by) classes = "fa fa-check-circle";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="false"
    />
  );
};

export default Approve;
