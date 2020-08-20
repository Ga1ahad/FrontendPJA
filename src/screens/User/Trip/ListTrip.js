import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import '../../index.css';

const rows = [
    createData('Pierwsza podróż', '20.7.2020', '26.7.2020', 'Kraków, Polska', '12.7.2020 12:20'),
    createData('Druga podróż', '18.9.2020', '26.9.2020', 'Dublin, Irlandia', '8.9.2020 14:26'),

];

function createData(name, start, end, city, country, add_date) {
    return { name, start, end, city, country, add_date };
}

const ListTrip = () => {
    return (
        <div>
            <Paper className="paper" >
                <h2>PODRÓŻE</h2>
                <Fab color="primary" className="tool">
                    <AddIcon />
                </Fab>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Nazwa</TableCell>
                                <TableCell align="right">Początek</TableCell>
                                <TableCell align="right">Koniec</TableCell>
                                <TableCell align="right">Miejsce</TableCell>
                                <TableCell align="right">Data dodania</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow>
                                    <TableCell align="right">{row.name}</TableCell>
                                    <TableCell align="right">{row.start}</TableCell>
                                    <TableCell align="right">{row.end}</TableCell>
                                    <TableCell align="right">{row.city}</TableCell>
                                    <TableCell align="right">{row.country}</TableCell>
                                    <TableCell align="right">{row.add_date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

export default ListTrip;
