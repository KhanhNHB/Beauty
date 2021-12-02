import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import "./Notification.css";

function Notification({ notify, setNotify }) {

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        
        setNotify({
            ...notify,
            isOpen: false
        })
    }

    return (
        <div className="notifications">
            <Snackbar
                open={notify.isOpen}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                style={{ marginTop: 50 }}
            >
                <Alert severity={notify.type} onClose={handleClose}>
                    {notify.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Notification;