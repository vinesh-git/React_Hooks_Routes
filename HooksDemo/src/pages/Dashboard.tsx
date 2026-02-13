import axiosclient from "../api/axiosclient";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

type UserData = {
    userId : number,
    id : number,
    title : string,
    completed : boolean
}

function Dashboard() {
    const fetchUsers = async() : Promise<UserData[]> =>{
        try {
            //give some delay to test the spinner component
            await new Promise(resolve => setTimeout(resolve, 5000));
            const response = await axiosclient.get("/todos");
            return response.data;
        } catch (error) {
            console.log(error);
        } 
        return [];
        
    }
    

    const {data, isLoading, error} = useQuery({
        queryKey : ['todos'],
        queryFn : () => fetchUsers()
    })
    
    const navigate = useNavigate();

    if(isLoading) return <Spinner isLoading={isLoading} />
    if(error) return <p>Error fetching data : {error.message}  </p>
      return (
        <div className="todo-grid">
            {data?.map((item: UserData) => (
                <div className="todo-column" key={item.id} onClick={() => navigate(`/todo/${item.id}`, { state: item })}>
                    <div className="todo-item" role="button">
                        <h3 className="todo-title">{item.title}</h3>
                        <p className={`todo-status ${item.completed ? 'completed' : 'not-completed'}`}>
                            {item.completed ? 'Completed' : 'Not Completed'}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      )
}

export default Dashboard



