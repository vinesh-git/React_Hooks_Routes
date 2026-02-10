import { useState } from "react";
import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
    const [user,setUser] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const loginFunc = ()=>{
        if(user==="admin" && password === "admin123"){
            localStorage.setItem("auth","true");
            navigate('/');
        }
        else return;
    }
  return (
    <div>
        <input type="text" value={user} onChange={(e)=> setUser(e.target.value)}/>
        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={loginFunc}>login</button>
    </div>
  )
}

export default Login