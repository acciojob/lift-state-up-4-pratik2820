

import React, { useState } from "react";
import Child from "./Child";


const Parent = () =>{

    const[itemName,setItemName] = useState("")
    const[itemPrice,setItemPrice] = useState("")
    const[cartItems,setCartItems] = useState([
        {id:1,name:'Item1',price:10},
        {id:2,name:'Item2',price:20},
        {id:3,name:'Item3',price:30}
    ])

    // console.log(cartItems)

    function handleAddItem(){
        let newItem;
        if(itemName&&itemPrice){
            newItem={
                id:cartItems.length+1,
                name:itemName,
                price:itemPrice
            }
        }
        setCartItems([...cartItems,newItem])
        setItemName('')
        setItemPrice('')
    }

    function handleRemoveItem(itemId){

        setCartItems((prevItems)=>{
            return prevItems.filter((item)=>item.id!==itemId)
        })
    }


    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <div className="inputs">
                <input type="text" id="itemName" onChange={(e)=>setItemName(e.target.value)}/>
                <input type="number" id="itemPrice" onChange={(e)=>setItemPrice(e.target.value)}/>
                <button onClick={handleAddItem}>Add Item</button>

            </div>

            <Child cartItems={cartItems} handleRemoveItem={handleRemoveItem}/>



        </div>
    )
}


export default Parent;