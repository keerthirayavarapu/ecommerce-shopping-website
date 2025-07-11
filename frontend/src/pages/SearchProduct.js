import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import SummaryApi from '../common'
import VerticalCard from '../components/VerticalCard'

const SearchProduct = () => {
    const query = useLocation()
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    console.log("query",query.search)

    // const fetchProduct = async()=>{
    //     setLoading(true)
    //     const response = await fetch(SummaryApi.searchProduct.url+query.search)
    //     const dataResponse = await response.json()
    //     setLoading(false)

    //     setData(dataResponse.data)
    // }

    // useEffect(()=>{
    //     fetchProduct()
    // },[query])
    useEffect(() => {
      const fetchProduct = async () => {
        setLoading(true);
        const response = await fetch(SummaryApi.searchProduct.url + query.search);
        const dataResponse = await response.json();
        setLoading(false);
        setData(dataResponse.data);
      };
    
      fetchProduct();
    }, [query]);
    

  return (
    <div className='container mx-auto p-4'>
      {
        loading && (
          <p className='text-lg text-center'>Loading ...</p>
        )
      }
 
      <p className='text-lg font-semibold my-3'>Search Results : {data.length}</p>

      {
        data.length === 0 && !loading && (
           <p className='bg-white text-lg text-center p-4'>No Data Found....</p>
        )
      }


      {
        data.length !==0 && !loading && (
          <VerticalCard loading={ loading} data={data}/>
        )
      }

    </div>
  )
}

export default SearchProduct



// import React, { useState, useEffect } from 'react';

// const SearchProduct = ({ query }) => {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);

//   const fetchProduct = async () => {
//     setLoading(true); // Start loading
//     try {
//       const response = await fetch(`/api/products?search=${query}`);
//       const dataResponse = await response.json();
//       setData(dataResponse.data); // Set data
//     } catch (error) {
//       console.error('Error fetching products:', error);
//       setData([]); // Reset data on error
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   useEffect(() => {
//     if (query) {
//       fetchProduct();
//     }
//   }, [query]);

//   return (
//     <div className="container mx-auto p-4">
//       {loading && <p className="text-lg text-center">Loading ...</p>}

//       <p className="text-lg font-semibold my-3">
//         Search Results: {data.length}
//       </p>

//       {!loading && data.length === 0 && (
//         <p className="bg-white text-lg text-center p-4">No Data Found...</p>
//       )}

//       {!loading && data.length !== 0 && (
//         <div>
//           {data.map((item, index) => (
//             <div key={index} className="bg-white p-4 my-2">
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchProduct;