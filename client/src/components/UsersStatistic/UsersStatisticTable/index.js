import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Pagination } from "@material-ui/lab/";
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery";
import axios from "axios";

import "./styles.scss";

export default function CustomizedTables() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const matches = useMediaQuery(theme => theme.breakpoints.up("sm"));

  const handleChange = (event, value) => {
    setPage(value);
  };
  const history = useHistory();
  function handleClick(id) {
    history.push(`/users/${id}`);
  }
  useEffect(() => {
    axios
      .get(`/api/users?page=${page}&perPage=50`)
      .then(res => setUsers(res.data.users))
      .catch(error => console.log(error.response));
  }, [page]);

  const numberWithSpaces = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const rows = users.map(row => (
    <TableRow key={row.email} onClick={() => handleClick(row.id)} className="statistic_table_row">
      <TableCell className="statistic_table_bodyCell">{row.id}</TableCell>
      <TableCell className="statistic_table_bodyCell">{row.first_name}</TableCell>
      <TableCell className="statistic_table_bodyCell">{row.last_name}</TableCell>
      <TableCell className="statistic_table_bodyCell">{row.email}</TableCell>
      <TableCell className="statistic_table_bodyCell" align="center">
        {row.gender.toLowerCase()}
      </TableCell>
      <TableCell className="statistic_table_bodyCell" align="center">
        {row.ip_address}
      </TableCell>
      <TableCell className="statistic_table_bodyCell" align="center">
        {numberWithSpaces(row.total_clicks)}
      </TableCell>
      <TableCell className="statistic_table_bodyCell" align="center">
        {numberWithSpaces(row.total_page_views)}
      </TableCell>
    </TableRow>
  ));

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell className="statistic_table_headerCell">Id</TableCell>
              <TableCell className="statistic_table_headerCell">First name</TableCell>
              <TableCell className="statistic_table_headerCell">Last name</TableCell>
              <TableCell className="statistic_table_headerCell">Email</TableCell>
              <TableCell className="statistic_table_headerCell">Gender</TableCell>
              <TableCell align="center" className="statistic_table_headerCell">IP address</TableCell>
              <TableCell align="center" className="statistic_table_headerCell">Total clicks</TableCell>
              <TableCell align="center" className="statistic_table_headerCell">Total page views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{rows}</TableBody>
        </Table>
      </TableContainer>
      <div className="statistic_table_pagination">
        <Pagination count={20} onChange={handleChange} size={matches ? "medium" : "small"} siblingCount={matches ? 1 : 0} boundaryCount={1} />
      </div>
    </div>
  );
}

