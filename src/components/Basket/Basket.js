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
import DeleteIcon from '@mui/icons-material/Delete';
import "./Basket.css";
import { currencyFormat } from '../../utils/CurrencyFormat';
import Notification from '../Notification';
import { useStateValue } from '../../provider/StateProvider';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

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

const Basket = () => {
    const [{ basket }, dispatch] = useStateValue();
    const [selected, setSelected] = useState([]);
    const [notify, setNotify] = useState({ isOpen: false, message: "", type: "" });
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: "" });

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

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_TO_BASKET",
            basket: basket,
            id: id
        });

        setNotify({
            isOpen: true,
            message: "Xóa thành công",
            type: "success"
        });
    }

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
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={product.id}
                                        selected={isItemSelected}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                onClick={(event) => handleClick(event, product.id)}
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
                                            <button className="basket__delete" onClick={() => {
                                                setConfirmDialog({
                                                    title: "Bạn muốn xoá sản phẩm này?",
                                                    isOpen: true,
                                                    onConfirm: () => {
                                                        handleDelete(product.id);
                                                        setConfirmDialog({
                                                            ...confirmDialog,
                                                            isOpen: false
                                                        })
                                                    }
                                                });
                                            }}>
                                                <DeleteIcon />
                                            </button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
        </Box>
    );
}

export default Basket;