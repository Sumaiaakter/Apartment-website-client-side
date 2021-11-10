// import { useEffect, useState } from "react";

// const useApartments = () => {
//     const [apartments, setApartments] = useState([]);
//     const [totalPage, setTotalPage] = useState(0);
//     const [currentPage, setCurrentPage] = useState(0);
//     const size = 9;
//     useEffect(() => {
//         fetch(
//             `https://aqueous-dawn-65962.herokuapp.com/courses?size=${size}&&page=${currentPage}`
//         )
//             .then((res) => res.json())
//             .then((data) => {
//                 setApartments(data.apartments);
//                 const totalData = data.count;
//                 const pages = Math.ceil(totalData / size);
//                 setTotalPage(pages);
//             });
//     }, [currentPage]);
//     return { apartments, setApartments, totalPage, currentPage, setCurrentPage };
// };

// export default useApartments;
