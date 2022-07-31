import classes from "./Table.module.css";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = (props) => {
  return (
    <div className={classes.table}>
      <TableHeader />
      <div className={classes["table-content"]}>
        {props.data.map((member, index) => {
          index++;
          return (
            <TableRow
              key={member.id}
              no={index}
              name={member.name}
              email={member.email}
              phone={member.phone}
              web={member.website}
              address={member.address}
              company={member.company}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Table;
