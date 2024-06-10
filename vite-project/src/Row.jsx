import React from "react";

function Row({product}) {
    return ( 
        <tr>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.id}</td>
            <td>{product.inStock}</td>
            <td>{product.price}</td>
        </tr>
     );
}

export default Row;