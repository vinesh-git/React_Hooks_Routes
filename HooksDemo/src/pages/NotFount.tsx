import { useNavigate } from "react-router-dom";

function NotFount() {
  const navigate = useNavigate();
  return (
    <>
        <div>Error ... Not found</div>
        <button onClick={()=> navigate('/login',{replace : true})}>click here to login</button>
    </>
  )
}

export default NotFount