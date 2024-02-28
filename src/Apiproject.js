// import React, { useEffect, useState } from 'react'

// function Apiproject() {
//     const [users,setUser]=useState([]);
// useEffect(() => {
//     const fetchuser= async()=>{
//         try{
//             const response = await fetch('https://dummyjson.com/products')
//             const data = await response.json();
//             setUser(data.data);
//         } catch (error){
//             console.log("error occured")
//         }
//     };
//     fetchuser();
// },[])

//   return (
//     <div>
//         <ul>
//             {users.map((items)=>(
//                 <li>
//                     <p>{items.id}</p>
//                     <p>{items.title}</p>
//                     <p>{items.description}</p>
//                 </li>
//             ))}
//         </ul>
//     </div>
//   )       
// }

// export default Apiproject;

import React, { useEffect, useState } from 'react';

function Apiproject() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data); // Assuming the response directly provides an array of products
            } catch (error) {
                console.log("Error occurred:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p>ID: {product.id}</p>
                        <p>Title: {product.title}</p>
                        <p>Description: {product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Apiproject;
