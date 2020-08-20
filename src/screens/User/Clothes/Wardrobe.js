import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import '../../index.css';

const rows = [
  createData(
    'https://source.unsplash.com/Wr0TpKqf26s',
    'Czarny T-shirt',
    'koszulki',
    'koszulka, czarna, lato, lekka',
    '27.07.2020',
  ),
  createData(
    'https://source.unsplash.com/I3C5ctmT8Z0',
    'Niebieska koszula',
    'koszule',
    'koszule, niebieska, lato, formalna, elegancja',
    '27.07.2020',
  ),
];

function createData(address, name, type, tags, add_date) {
  return { address, name, type, tags, add_date };
}

const Wardrobe = () => {
  return (
    <div>
      <Paper className="paper">
        <h2>WARDROBE</h2>
        <Fab color="primary" className="tool">
          <AddIcon />
        </Fab>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Nazwa</TableCell>
                <TableCell align="right">Typ</TableCell>
                <TableCell align="right">Tagi</TableCell>
                <TableCell align="right">Data dodania</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.address}>
                  <TableCell component="th" scope="row">
                    <img src={row.address} width="160" height="190" alt="img" />
                  </TableCell>
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.tags}</TableCell>
                  <TableCell align="right">{row.add_date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Wardrobe;
