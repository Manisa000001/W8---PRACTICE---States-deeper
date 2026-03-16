
import React from "react";

export default function StuffForm({onAddStuff}){
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");

function handleSubmit(e) {
  e.preventDefault();
  
  onAddStuff(name,Number(price));
  setName("");
  setPrice("");
}
  return (
    <form className="stuff-form" onSubmit={handleSubmit}>
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" value={name} onChange={(e)=> setName(e.target.value)} />

      <p>Stuff price</p>
      <input type="search" placeholder="15"  value={price} onChange={(e)=> setPrice(e.target.value)}/>

      <button>Add Stuff</button>
    </form>
  );
}
