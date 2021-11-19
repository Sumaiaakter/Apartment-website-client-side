import React, { useState } from 'react';
import { Button, FormControl, Modal } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const BookingModal = () => {
    const { user } = useAuth();
    //_---------------------------------//
    const initialInfo = { customerName: user.displayName, email: user.email, phone: ' ' }
    const [bookingInfo, setBookingInfo] = React.useState(initialInfo);
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)


    }

    ///-------------------------------//

    return (
        <>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <FormControl
                        required
                        name="CustomerName"
                        onBlur={handleOnBlur}
                        type="text"
                        autoComplete="current-name"
                        id="name"
                        placeholder={user.displayName}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>

                </Modal.Footer>
            </Modal.Dialog>
        </>
    );
};

export default BookingModal;