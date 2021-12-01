import React, { useState } from 'react';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox
} from '@mui/material';
import { useStateValue } from '../../provider/StateProvider';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Basket.css";
import { currencyFormat } from '../../utils/CurrencyFormat';

function BasketTableHead(props) {
    const { onSelectAllClick, numSelected, rowCount } = props;

    const headCells = [
        {
            id: 'all_product',
            numeric: false,
            disablePadding: true,
            label: 'Tất cả (' + rowCount + ' sản phẩm)',
        },
        {
            id: 'price_unit',
            numeric: true,
            disablePadding: false,
            label: 'Đơn giá',
        },
        {
            id: 'quantity',
            numeric: true,
            disablePadding: false,
            label: 'Số lượng',
        },
        {
            id: 'total_price',
            numeric: true,
            disablePadding: false,
            label: 'Thành tiền',
        }
    ];

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
                <TableCell>
                    <DeleteIcon />
                </TableCell>
            </TableRow>
        </TableHead>
    );
}

const Basket = ({ basket }) => {
    const [selected, setSelected] = useState([]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = basket?.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (id) => basket.indexOf(id) !== -1;

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table sx={{ minWidth: 750 }} aria-labelledby="basket">
                        <BasketTableHead
                            onSelectAllClick={handleSelectAllClick}
                            numSelected={selected.length}
                            rowCount={basket?.length}
                        />
                        <TableBody>
                            {basket.map((product, index) => {
                                const isItemSelected = isSelected(product.id);
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, product.id)}
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={product.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <img className="basket__image" src={product.image} alt="" />
                                            <p>{product.name}</p>
                                        </TableCell>
                                        <TableCell>{currencyFormat(product.price)}</TableCell>
                                        <TableCell>{product.quantity}</TableCell>
                                        <TableCell>{currencyFormat(product.price * product.quantity)}</TableCell>
                                        <TableCell>
                                            <DeleteIcon />
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default Basket;