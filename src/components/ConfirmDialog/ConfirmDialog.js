import { NotListedLocation } from '@mui/icons-material';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography
} from '@mui/material';
import React from 'react';
import "./ConfirmDialog.css";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

function ConfirmDialog({ confirmDialog, setConfirmDialog }) {

    const handleClose = () => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        });
    }

    return (
        <Dialog open={confirmDialog.isOpen}>
            <DialogTitle>
                <PriorityHighIcon color="primary" fontSize="large" />
            </DialogTitle>
            <DialogContent>
                <Typography variant="h6">{confirmDialog.title}</Typography>
            </DialogContent>
            <DialogActions>
                <button
                    className="confirmDialog__button button__no"
                    onClick={handleClose}
                >
                    Không
                </button>
                <button
                    className="confirmDialog__button button__yes"
                    onClick={confirmDialog.onConfirm}
                >
                    Có
                </button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmDialog;