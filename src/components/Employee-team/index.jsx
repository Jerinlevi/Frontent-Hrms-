import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { Link } from 'react-router-dom';
import './index.css'

const EmployeeTeam = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetching = async () => {
            try {
                setLoading(true)
                const token = localStorage.getItem("token")
                const res = await fetch("https://responsible-vitality-production.up.railway.app/employee-team", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
                const data = await res.json()

                setData(data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }
        fetching();
    }, []);
    return (
        <div>
            <h1>Team Structure</h1>
            <Link to='/home'>
                <button style={{ marginBottom: '20px' }}>Go to Home</button>
            </Link>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Employee-Team ID</th>
                            <th>Employee Name</th>
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

                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.employee_name}</td>
                                    <td>{item.team_name}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>


        </div>
    )
}
export default EmployeeTeam;