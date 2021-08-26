import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Paper,
  Fab,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import WorkIcon from '@material-ui/icons/Work';
import EditIcon from '@material-ui/icons/Edit';
import './index.css';
import userService from './Auth/services/user.service';

const useStyles = makeStyles({
  container: {
    // maxHeight: '100%',
  },
});

const ReactTable = (props) => {
  const { columns, rows, siteName, url, id_name } = props;

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Paper className="paper">
        <h2>{siteName}</h2>
        <a href={'/' + url + '/add/'}>
          <Fab color="primary" className="tool">
            <AddIcon></AddIcon>
          </Fab>
        </a>
        <TableContainer className={(classes.container, 'reactTable')}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell align="left">Akcje</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        let value = '';
                        if (typeof row[column.id] != 'undefined') {
                          value = row[column.id];
                        }
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {
                              // column.format && typeof value === 'number' ?
                              // column.format(value)
                              value.startsWith('http') ? (
                                <img className="clothPhoto" src={value} />
                              ) : (
                                //else
                                value
                              )
                            }
                          </TableCell>
                        );
                      })}
                      <div>
                        {props.siteName == 'Lista podróży' ? (
                          <TableCell>
                            <IconButton onClick={() => userService.postSuitcase(row[id_name])}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        ) : (
                          <TableCell>
                            <a href={'/' + url + '/edit/' + row[id_name]}>
                              <IconButton>
                                <EditIcon />
                              </IconButton>
                            </a>
                            <IconButton onClick={() => userService.remove(row[id_name], url)}>
                              <DeleteIcon />
                            </IconButton>
                          </TableCell>
                        )}
                      </div>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          labelRowsPerPage="Liczba rekordów na stronie:"
        />
      </Paper>
    </div>
  );
};
export default ReactTable;
