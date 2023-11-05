import { useEffect, useState } from "react";
import axios from 'axios';


function UserList(){

    const [users,setUsers]=useState([]);
    const getData=async()=>{
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log(resp.data);
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
            
        }
    }


    useEffect(()=>{
        getData(); //function call when component loads for the very first time
    },[]);

    return (<div>
        <h2> User List</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th><th>Name</th><th>Username</th><th>Email</th><th>Phone</th><th>Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item)=>{
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.website}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
    
}
export default UserList;