import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Aapartments from '../Admin/Aapartments';
import AddApartment from '../Admin/AddApartment';
import Orders from '../Admin/Orders';
import Overview from '../Admin/Overview';

const AdminPanel = () => {
    const history = useHistory();
    const { allContext } = useAuth();
    const { user } = allContext;
    const { uid } = user;
    const [active, setActive] = useState('Overview');
    console.log(active);

    return (

        <div>
            {
                uid !== "hBagQWjYnKbfbWLkiE9B2tl6CU52" ? (
                    history.push('/home')
                ) : (
                    <div className="container-fluid">
                        <div className="row my-3">
                            <div className="col-md-3 col-6">
                                <ul className="list-unstyled">
                                    <li><input
                                        onClick={() => setActive("Overview")}
                                        className={active === "Overview" ?
                                            "w-100 my-2 bg-primary text-white d-block" :
                                            "w-100 my-2 bg-white d-block"}
                                        type="button"
                                        value="Overview" /></li>

                                    <li><input onClick={() => setActive("Orders")}
                                        className={active === "Orders" ?
                                            "w-100 my-2 bg-primary text-white d-block" :
                                            "w-100 my-2 bg-white d-block"}
                                        type="button"
                                        value="Orders" /></li>

                                    <li><input onClick={() => setActive("Apartment")}
                                        className={active === "Apartment" ?
                                            "w-100 my-2 bg-primary text-white d-block" :
                                            "w-100 my-2 bg-white d-block"}
                                        type="button"
                                        value="Apartment" /></li>

                                    <li><input onClick={() => setActive("Add Apartment")}
                                        className={active === "Add Apartment" ?
                                            "w-100 my-2 bg-primary text-white d-block" :
                                            "w-100 my-2 bg-white d-block"}
                                        type="button"
                                        value="Add Apartment" /></li>
                                </ul>
                            </div>
                            <div className="col-md-9 col-6">
                                {
                                    (active === "Overview" && <Overview />) ||
                                    (active === "Orders" && <Orders />) ||
                                    (active === "Apartment" && <Aapartments />) ||
                                    (active === "Add Apartment" && <AddApartment />)


                                }
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default AdminPanel;