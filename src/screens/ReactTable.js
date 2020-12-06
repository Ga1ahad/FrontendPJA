import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import './index.css';

const useStyles = makeStyles({
    container: {
        maxHeight: 440,
    },
});

const ReactTable = (props) => {
    const { columns, rows, siteName, url, id_name } = props;

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const removeData = (id) => {
        axios.delete('http://localhost:59131/api/' + url + '/' + id).then(res => {
            window.location.reload();
        })
    }


    return (
        <div>
            <Paper className="paper">
                <h2>{siteName}</h2>
                <Fab color="primary" className="tool">
                    <AddIcon />
                </Fab>
                <TableContainer className={classes.container}>
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
                                <TableCell align="center">
                                    Akcje
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                    {row[id_name]}
                                                </TableCell>
                                            );
                                        })}
                                        <TableCell>
                                            <IconButton>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton onClick={() => removeData(row[id_name])}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
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
                />
            </Paper>
        </div>

    )
}

export default ReactTable;
