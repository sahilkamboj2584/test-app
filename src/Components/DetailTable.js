import React, { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import { TableBody, TableHead, TextField } from "@mui/material";
import TableHeading from "./TableHeading";
import { TableContainer } from "@mui/material";
import TableItem from "./TableItem";
import { debounce } from "lodash";
import "./table.css";

const DetailTable = () => {
  const [data, setData] = useState([]);
  const myRefs = useRef([]);
  const [active, setActive] = useState()

  const handler = debounce((e) => {handlerSearch(e.target.value);}, 1000);

  const handlerSearch = (id) => {
    data.map((item, key) => {
      if (parseInt(id) === parseInt(item.id)) {
        setActive(key)
        myRefs.current[key].scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    });
    if(id === ""){
      setActive()
    }
  };

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/albums";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <TextField
        className="table-input"
        id="outlined-basic"
        label="Enter Id"
        variant="outlined"
        onChange={(e) => {
          handler(e);
        }}
      />
     <h4>Please Wait for 1 seconds after typing</h4>
      <TableContainer className="table-wrapper">
        <Table className="table-main" aria-label="simple table">
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {data &&
              data?.map((item, i) => (
                <TableItem myRefs={myRefs} item={item} i={i} active={active} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DetailTable;
