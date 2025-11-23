import  {useState,useContext} from 'react';
// import { Link } from 'react-router-dom';
import {Link,useNavigate} from 'react-router-dom';
import {AppContext} from '../../context/AppContext';  

import  './index.css'
const Login =()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [errmsg,seterrMsg]=useState("")
    const {login}=useContext(AppContext)
    const navigate=useNavigate()
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            const request=await fetch("https://responsible-vitality-production.up.railway.app/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            })
            const responseText = await request.text();

            if (!request.ok) {
                try {
                    const errData = JSON.parse(responseText);
                    seterrMsg(errData.error || "Login failed");
                } catch {
                    seterrMsg(responseText);
                }
                return;
            }

            let data;
            try {
                data = JSON.parse(responseText);
            } catch {
                seterrMsg("Invalid server response");
                return;
            }

            login(data.token);
            navigate('/home', { replace: true });
            return;
        }catch(err){
            console.log(err)        
    }
}
        // Perform login logic here
        
return(
    <div className='login-container'>
      <p>{errmsg}</p>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit">Sign In</button>
            <p>Not Registered ?</p>
            <button className='button-register'><Link as="a" to='/register'>Register Now</Link></button>
        </form> 
        </div>       
)
}
export default Login