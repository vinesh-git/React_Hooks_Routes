import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosclient from '../api/axiosclient';
import Spinner from '../components/Spinner';
import './Dashboard.css';

type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

function TodoDetails() {
    //remove
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [todo, setTodo] = useState<Todo | null>(location.state ?? null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // if we already have the todo from navigation state, skip fetching
        if (todo) return;
        if (!id) return;

        const fetchTodo = async () => {
            setLoading(true);
            try {
                const res = await axiosclient.get(`/todos/${id}`);
                setTodo(res.data);
            } catch (err: any) {
                setError(err?.message ?? 'Failed to load todo');
            } finally {
                setLoading(false);
            }
        }

        fetchTodo();
    }, [id, todo]);

    if (loading) return <Spinner isLoading={loading} />;
    if (error) return <div className="todo-details"><p>Error: {error}</p></div>;
    if (!todo) return <div className="todo-details"><p>Todo not found</p></div>;

    return (
        <div className="todo-details">
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
            <div className="todo-details-card">
                <div className="todo-details-meta">
                    <h2 className="todo-title">{todo.title}</h2>
                    <p className={`todo-status ${todo.completed ? 'completed' : 'not-completed'}`}>
                        {todo.completed ? 'Completed' : 'Not Completed'}
                    </p>
                    <p className="todo-id">ID: {todo.id} • User: {todo.userId}</p>
                </div>
            </div>
        </div>
    )
}

export default TodoDetails;
