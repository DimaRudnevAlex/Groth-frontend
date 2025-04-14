import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { FC } from 'react';
import { ITableProps } from '../../common/types/assets';

const TopPriceComponent: FC<ITableProps> = ({ assets }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Изменение (%)</TableCell>
                        <TableCell align="right">Изменение ($)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assets.map((elem) => (
                        <TableRow
                            key={elem.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {elem.name}
                            </TableCell>
                            <TableCell align="right">
                                {elem.current_price}
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{
                                    color: `${
                                        elem.price_change_24h > 0
                                            ? '#32911d'
                                            : '#b73b6e'
                                    }`,
                                }}
                            >
                                {elem.price_change_24h.toFixed(2)}
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{
                                    color: `${
                                        elem.price_change_percentage_24h > 0
                                            ? '#32911d'
                                            : '#b73b6e'
                                    }`,
                                }}
                            >
                                {elem.price_change_percentage_24h.toFixed(2)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TopPriceComponent;
