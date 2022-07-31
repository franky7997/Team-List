import classes from "./TableRow.module.css";

const TableRow = (props) => {
  const alternateRow = props.no % 2 === 0 ? "alternate-row" : "";
  return (
    <div className={`${classes["table-row"]} ${classes[alternateRow]}`}>
      <div className={classes["col-no"]}>{props.no}</div>
      <div className={classes["col-name"]}>{props.name}</div>
      <div className={classes["col-email"]}>
        <a href={`mailto:${props.email}`}>{props.email}</a>
      </div>
      <div className={classes["col-address"]}>
        <div>{props.address.street}</div>
        <div>{props.address.suite}</div>
        <div>{props.address.city}</div>
        <div>{props.address.zipcode}</div>
      </div>
      <div className={classes["col-phone"]}>
        <a href={`tel:${props.phone}`}>{props.phone}</a>
      </div>
      <div className={classes["col-web"]}>
        <a href={props.web}>{props.web}</a>
      </div>
      <div className={classes["col-company"]}>
        <div style={{ fontWeight: "bold" }}>{props.company.name}</div>
        <div>{props.company.catchPhrase}</div>
      </div>
    </div>
  );
};

export default TableRow;
