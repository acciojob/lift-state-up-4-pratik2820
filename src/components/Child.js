

import React from "react";


const Child = ({cartItems,handleRemoveItem}) =>{

    function removeItem(itemId){
        handleRemoveItem(itemId)

    }

    


    return(
        <div className="child">
             
                <h2>Child Component</h2>
                <ul>
                {
                    cartItems && cartItems.map((item)=>(
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <span>{` - $${item.price}`}</span>
                            <button onClick={()=>removeItem(item.id)}>Remove</button>
                        </li>

                    ))
                }
                </ul>



        </div>
    )
}

export default Child;