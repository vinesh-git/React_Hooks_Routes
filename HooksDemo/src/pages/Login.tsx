import { useNavigate } from "react-router-dom"

function Login() {
    const navigate = useNavigate();
  return (
    <div>
        <button onClick={()=> navigate('/mainlayout')}>login</button>
    </div>
  )
}

export default Login