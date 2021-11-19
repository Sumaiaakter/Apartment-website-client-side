import { useEffect, useState } from "react";

const useApartments = () => {
    const [apartments, setApartments] = useState([]);
    //pagination-------------
    const [totalPage, setTotalPage] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const size = 9;
    //--------------------//


    useEffect(() => {
        fetch(`http://localhost:5000/apartments?size=${size}&&page=${currentPage}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setApartments(data.apartments);
                // pagination--------------
                const totalData = data.count;
                const pages = Math.ceil(totalData / size);
                setTotalPage(pages);

                //---------------------//

            });
    }, [currentPage]);
    return { apartments, setApartments, totalPage, currentPage, setCurrentPage };
};

export default useApartments;
