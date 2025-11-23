import  {useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import {AppContext} from '../../context/AppContext'
import './index.css'

const Register =()=>{
    const [name,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")
    const [orgName,setOrgName]=useState("")
    const [loading,setLoading]=useState(false)
    const {Naming}=useContext(AppContext)

    const navigate=useNavigate()
    
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            setLoading(true)
            const request=await fetch("https://responsible-vitality-production.up.railway.app/register",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name,password,email,orgName})
            })
            // const response=await request.text()
            // (response)
            // if(response.ok){
            //     navigate('/login')
            //     setLoading(false)
            const responseText = await request.text();
        
            // console.log("Server response:", responseText);
          

            if (responseText.toLowerCase().includes("success")) {
                alert("Registered Successfully!");
                localStorage.setItem("username", name);
                Naming(name);
                navigate("/login");
            } else {
                alert(responseText); // shows "Email already exist"
            }
            setLoading(false);
        }catch(err){
            console.log(err)        
}
    }
        // Perform login logic here
        
return(
    <div className='register-container'>
        {loading ? <h2>Registering you...</h2> : null}  
        <h1>Register NOW</h1>
        <form onSubmit={handleSubmit} className='formed'>
            <label htmlFor='name'>Name</label>
            <input type="text" id='name'  value={name} onChange={(e)=>setUsername(e.target.value)}/>
            <label htmlFor='password'>Password</label>
            <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <label htmlFor='email'>Email</label>
            <input type="email" id='email'  value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor='orgName'>Organization Name</label>
            <input type="text"  id="orgName" value={orgName} onChange={(e)=>setOrgName(e.target.value)}/>
            <button type="submit">Register</button>
        </form> 
        </div>       
)
}
export default Register