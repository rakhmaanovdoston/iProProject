// import React, { useEffect, useState } from 'react'
// import { fetchCategories } from '../services/api';

// const Categories = () => {
//     const [categories , setCategories] = useState([]);
//     const [products , setProducts] =useState([]);
//     const [selectedCategory , setSelectedCategory] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const getCategories = async () => {
//             try {
//                 const data = await fetchCategories();
//                 setCategories(data);
//             } catch (error) {
//                 console.error("Xatolik:", error);
//             }finally {
//                 const [loading, setLoading] = useState(true);
//             }
//         };

//         getCategories()
//     },);


//   return (
//     <div></div>
//   )
// }

// export default Categories