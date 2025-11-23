import { useEffect,useContext, useState} from "react";
import {BarLoader} from 'react-spinners'
import { Link } from 'react-router-dom';
// import {AppContext} from '../../context/AppContext'
import './index.css'

const Employees=()=>{
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [name,setName]=useState('')
    const [name1,setName1]=useState('')
    const [id,setId]=useState('')
    const [id1,setId1]=useState('')
    // const {token}=useContext(AppContext)
    useEffect(()=>{
       const fetching=async()=>{
        try{
            setLoading(true)
            const token=localStorage.getItem("token")
            const res=await fetch("https://responsible-vitality-production.up.railway.app/teams",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
            })
            // console.log(res)
            const data=await res.json()
            // console.log(data)
            setData(data)
            setLoading(false)
        }   catch(err){
            console.log(err)
        }
       }
       fetching()
    },[]);
    const addTeam=async()=>{
      const token=localStorage.getItem('token')
      const response=await fetch("https://responsible-vitality-production.up.railway.app/teams",{
          method:'POST',
          headers:{"Content-Type":"application/json",
                  "Authorization":`Bearer ${token}`},
          body:JSON.stringify({"name":name})
      })
      const text=await response.text();
      setName("")
      alert(text)
      
      const res = await fetch("https://responsible-vitality-production.up.railway.app/teams", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    const updated = await res.json();
    setData(updated);
    }
    const deleteTeam=async()=>{
      const token=localStorage.getItem("token")
      const response=await fetch(`https://responsible-vitality-production.up.railway.app/teams/${id}`,{
          method:"DELETE",
          headers:{
              "Content-Type":"application/json",
              "Authorization":`Bearer ${token}`
          },
          
      })
      const res=await response.text()
      alert(res)
      setId("")
      const res2 = await fetch("https://responsible-vitality-production.up.railway.app/teams", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
          }
      });
      const updated2 = await res2.json();
      setData(updated2);


  }
  const  editTeam=async()=>{
    const token=localStorage.getItem("token")
    const response=await fetch(`https://responsible-vitality-production.up.railway.app/teams/${id1}`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({name:name1})    
    })
    const text=await response.text();
    alert(text)
    setId1("")
    setName1("");
  
    const res = await fetch("https://responsible-vitality-production.up.railway.app/teams", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
    const updated = await res.json();
    setData(updated);
}

    return(
        <div>
            <h1>Team </h1>
            <Link to='/home'>
                <button style={{ marginBottom: '20px' }}>Go to Home</button>
            </Link>
           <table>
            <thead>
            <tr>
                <th>Team Id</th>
                <th>Team Name</th>
                
                
                </tr>
            </thead>
            <tbody>
  {loading ? (
    <tr>
      <td colSpan={4}>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80px",
          width: "100%"
        }}>
          <BarLoader />
        </div>
      </td>
    </tr>
  ) : (
    data.map(each => (
      <tr key={each.id}>
        <td>{each.id}</td>
        <td>{each.name}</td>

      </tr>
    ))
  )}
</tbody>
            </table>
            <div style={{ marginTop: "20px" }}>
  
  {/* ADD EMPLOYEE */}
  <h3>Add Team</h3>
  <input
    type="text"
    value={name}
    placeholder="Enter Team Name"
    onChange={(e) => setName(e.target.value)}
  />
  
  <button onClick={addTeam} className="button-color">Add</button>

  <br /><br />

  {/* DELETE EMPLOYEE */}
  <h3>Delete Teams</h3>
  <input
    type="number"
    value={id}
    placeholder="Enter Team ID"
    onChange={(e) => setId(e.target.value)}
  />
  <button onClick={deleteTeam} className="button-color">Delete</button>
  <br/>
  <h3>Edit Employee</h3>
  <input
    type="number"
    value={id1}
    placeholder="Enter Team ID"
    onChange={(e) => setId1(e.target.value)}
  />
  <input
    type="text"
    value={name1}
    placeholder="Enter New Name"
    onChange={(e) => setName1(e.target.value)}
  />
 
  <button onClick={editTeam} className="button-color">Edit</button>


</div>
            
        </div>
    )
}
export default Employees;