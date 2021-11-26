import React, { useEffect, useState } from 'react';

const Overview = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h1 className="text-center">overview</h1>
            <h1>Total Order: {orders.length}</h1>
        </div>
    );
};

export default Overview;