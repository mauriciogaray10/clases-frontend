import { useState, useEffect } from "react"

const FetchingDeDatos = () => {
 const [users, setUsers] = useState([]);

 
 
 useEffect(()=>{
    const data = fetch('https://jsonplaceholder.typicode.com/users');
    data.then((res)=> res.json()).then((data)=> setUsers(data)).catch();
 }, [])
 console.log(users);



 
    return (
    <div>FetchingDeDatos</div>
  )
}

export default FetchingDeDatos