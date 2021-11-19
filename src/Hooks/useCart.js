import { useEffect, useState } from "react";

import useFirebase from "./useFirebase";



const useCart = () => {

    const { user } = useFirebase();
    const { uid } = user;
    const [selectedApartment, setSelectedApartment] = useState([]);


    //uses of local storage 
    useEffect(() => {
        fetch(`http://localhost:5000/cart/${uid}`)
            .then(res => res.json())
            .then(data => {
                if (data.length) {
                    setSelectedApartment(data);
                }

            });

    }, [uid]);



    function addToCart(apartment) {
        // alert(`${apartment.title}`);

        const isHave = selectedApartment.find(selected => selected._id === apartment._id);

        delete apartment._id;
        apartment.uid = uid;
        apartment.status = 'pending';


        if (isHave) {
            alert('Apartment has been selected')
        }
        else {

            fetch('http://localhost:5000/apartment/add', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(apartment)

            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        const newSelection = [...selectedApartment, apartment];
                        setSelectedApartment(newSelection);
                    }
                })


        }

    }

    function remove(id) {
        // alert(id);


        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',


        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount === 1) {
                    const selectAfterRemove = selectedApartment.filter(apartment => apartment._id !== id);
                    setSelectedApartment(selectAfterRemove);
                }
                else {
                    alert("something went wrong")
                }
            })

    }




    return { setSelectedApartment, addToCart, selectedApartment, remove, };
};

export default useCart;