import { useEffect, useState } from "react";
import Axios from 'axios';
import './user.css';

 function User(){
    
    const [data, setData] = useState([]);

    useEffect( () => {
        const fetchData = () => {
            Axios.get('https://dummyjson.com/users')
            .then((res)=>{
                if(res.status === 200)
                {
                    setData(res.data.users);
                }
                else{
                    Promise.reject();
                }
            })
            .catch((err)=>alert(err))
        };
        fetchData();
    }, []);
        

    return(
        <div>
            <h1 style={{color:"white"}}>Dummy data</h1>
            <table>
                <tr>
                    <th>S No.</th>
                    <th>Profile Pic</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Domain</th>
                    <th>IP</th>
                    <th>University</th>
                </tr>
                {data.map((item, index) => (
                    <tr ket={index}>
                        <td id="no">{item.id}</td>
                        <td>
                            <img src={item.image} alt='profpic' height="45px" />
                        </td>
                        <td>{item.firstName}</td>
                        <td>{item.lastName}</td>
                        <td>{item.gender}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>{item.domain}</td>
                        <td>{item.ip}</td>
                        <td>{item.university}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default User;