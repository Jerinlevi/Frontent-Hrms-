import React from 'react';
import { useContext, } from 'react';
import { AppContext } from '../../context/AppContext';
import { Link,useNavigate} from 'react-router-dom';
import './index.css';

const Home = () => {
    const { username,logout } = useContext(AppContext);
    const navigate=useNavigate()
    // console.log("Name from context:", username);
    const logout1=()=>{
        logout()
        navigate('/login')
     
    }
    return (
        <div className='home'>
            <div className='home-logout'>
                <button style={{color:'white',background:'red'
                }} onClick={logout1}>Logout</button>
            </div>
        <div className="home-container">
            <div className="home-header" style={{ textAlign: 'center', padding: '20px' }}>
                <h1 className="home-title">Welcome {username}</h1>
                <p className="home-description">Dashboard of HR to manage the Employees and Teams.</p>
            </div>
            <div className="home-admin-section">
                <h2 className="admin-title">Administration</h2>
                <ul className="admin-list">
                    <li className="admin-list-item">
                            <Link to='/employees' className="admin-link">
                        <button className="admin-button">
                        Employees
                        </button>
                        </Link>
                    </li>
                    <li className="admin-list-item">
                      
                            <Link to='/teams' className="admin-link">  <button className="admin-button">Teams  </button></Link>
                      
                    </li>
                    <li className="admin-list-item">
                    
                            <Link to='/employee-team' className="admin-link">    <button className="admin-button">Team structure</button></Link>
                        
                    </li>
                    <li className="admin-list-item">
                        
                            <Link to='/assign' className="admin-link"><button className="admin-button">Assign Team</button></Link>
                        
                    </li>
                    <li className="admin-list-item">
                        
                            <Link to='/unassign' className="admin-link"><button className="admin-button">UnAssign Team </button></Link>
                       
                    </li>
                </ul>
            </div>
        </div>
</div>
    );
};
export default Home;
