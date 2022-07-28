import React from "react";
import { TableCell, TableRow } from "@mui/material";

const TableHeading = () => {
  return (
    <TableRow>
      <TableCell align="right">Id</TableCell>
      <TableCell align="right">User Id</TableCell>
      <TableCell align="center">Title</TableCell>
    </TableRow>
  );
};

export default TableHeading;
