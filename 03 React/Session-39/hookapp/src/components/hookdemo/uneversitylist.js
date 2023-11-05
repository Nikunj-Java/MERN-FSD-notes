import { useEffect, useState } from "react";
import axios from 'axios';


function UniversityList(){

    const [users,setUsers]=useState([]);
    const getData=async()=>{
        try {
            const resp = await axios.get('http://universities.hipolabs.com/search?country=india');
            console.log(resp.data);
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
            
        }
    }


    useEffect(()=>{
        getData(); //function call when component loads for the very first time
    },[]);

    return (<div className="container">
        <h2 className="text-center"> User List</h2>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Name</th><th>Code</th><th>Website</th><th>Domain</th><th>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item)=>{
                        return (<tr key={item.country}>
                             
                            <td>{item.name}</td>
                            <td>{item.alpha_two_code}</td>
                            <td>{item.web_pages}</td>
                            <td>{item.domains}</td>
                            <td>{item.country}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
    </div>)
    
}
export default UniversityList;