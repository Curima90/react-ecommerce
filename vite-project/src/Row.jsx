import React from "react";

function Row({product}) {
    return ( 
        <tr>
            <td>{product.name}</td>
        </tr>
     );
}

export default Row;