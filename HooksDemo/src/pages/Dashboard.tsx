import { useEffect, useState } from "react";
import axiosclient from "../api/axiosclient";

type UserData = {
    userId : number,
    id : number,
    title : string,
    completed : boolean
}

function Dashboard() {
    const [user,setUser] = useState<UserData[]>([]);
    const [loading , setloading] = useState<boolean>();
    const fetchUsers = async()=>{setloading(true);
        try {
            const response = await axiosclient.get("/todos");
            setUser(response.data);
        } catch (error) {
            console.log(error);
        } finally{
            setloading(false);
        }
        
    }
    useEffect(()=>{
        fetchUsers();
    },[])
  return (
    <>
        {!loading && user.map((item : UserData) =>{
            return (
                <>
                    <p>{item.title}</p>
                    <p>{item.completed}</p>
                </>
            )
        })}
    </>
  )
}

export default Dashboard