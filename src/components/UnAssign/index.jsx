import { useState } from "react";
import { Link } from 'react-router-dom';

const UnAssign=() => {
const [employeeId,setId1]=useState('');
const [teamId,setId2]=useState('')
const [msg,setMsg]=useState('')
    
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch("https://responsible-vitality-production.up.railway.app/unassign", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({ employeeId: Number(employeeId), teamId: Number(teamId )})  
                });
                const data = await response.text();
              setMsg(data);
               setId1("");
               setId2("");
            } catch (error) {
                console.error("Error of unassignment:", error);
            }
        };
        


    return(
        <div>
            <h2>Assign Employee to Team</h2>
            <Link to='/home'>
                <button style={{ marginBottom: '20px' }}>Go to Home</button>
            </Link>
            <div>
                <input type="number" placeholder="Employee ID" value={employeeId} onChange={(e) => setId1(e.target.value)} />
                <input type="number" placeholder="Team ID" value={teamId} onChange={(e) => setId2(e.target.value)} />
                <button onClick={fetchData}>UnAssign</button>
                <br></br>
                <p style={{color:"orange"}}>{msg}</p>
            </div>
        </div>
    )
}
export default UnAssign;