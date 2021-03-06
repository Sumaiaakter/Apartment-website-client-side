import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [reload]);

    function cancel(id) {
        const confirmation = window.confirm("Are you sure to delete!!");
        if (confirmation) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                    else {
                        alert("something went wrong")
                    }
                })
        }


    }


    function confirmHandler(id) {
        const confirmation = window.confirm("Are you sure to confirm!!");
        if (confirmation) {
            fetch(`http://localhost:5000/confirmation/${id}`, {
                method: "put",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount === 1) {
                        setReload(!reload);
                    } else {
                        alert("Order already confirmed!!");
                    }
                });
        }

    }
    return (
        <div>
            <h2 className="text-center">orders</h2>
            <h1 className="text-center">{orders.length}</h1>
            <table className="table table-hover w-100%">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Email</th>
                        <th scope="col">Status</th>
                        <th scope="col">Cancellation</th>
                        <th scope="col">Confirmation</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        const { img, _id, title, price, name, email, status } = order;
                        return (
                            <tr key={_id}>
                                <td>
                                    <img width="250px" height="40px" src={img} alt="" />
                                </td>
                                <td>
                                    <h6>{title?.slice(0, 15)}</h6>
                                </td>
                                <td>{price}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>{status}</td>
                                <td>
                                    <button
                                        onClick={() => cancel(_id)}
                                        className="btn btn-danger"
                                    >
                                        Cancel
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => confirmHandler(_id)}
                                        className="btn btn-success"
                                    >
                                        Confirm
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

        </div>
    );
};

export default Orders;