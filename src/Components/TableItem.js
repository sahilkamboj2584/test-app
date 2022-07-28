import React from "react";
import { TableCell, TableRow } from "@mui/material";
import "./table.css";

const TableItem = (props) => {
  
  const { item, i , active ,myRefs } = props;

  return (
    <TableRow
     ref={(el) => (myRefs.current[i] = el)}
     className={active ===i  ? "Table-row-bg" : ""}>
      <TableCell align="right">{item.id}</TableCell>
      <TableCell align="right">{item.userId}</TableCell>
      <TableCell align="center">{item.title}</TableCell>
    </TableRow>
  );
};

export default TableItem;
