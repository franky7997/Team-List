import classes from "./TableHeader.module.css";

const TableHeader = () => {
  return (
    <div className={classes["table-header"]}>
      <div className={classes["col-no"]}>No</div>
      <div className={classes["col-name"]}>Name</div>
      <div className={classes["col-email"]}>Email</div>
      <div className={classes["col-address"]}>Address</div>
      <div className={classes["col-phone"]}>Phone</div>
      <div className={classes["col-web"]}>Website</div>
      <div className={classes["col-company"]}>Company</div>
    </div>
  );
};

export default TableHeader;
