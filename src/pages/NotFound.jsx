import {useNavigate} from 'react-router-dom'
export default function NotFound (){
    const navigate = useNavigate()
    return (
        <div>
            <h2>Not Found</h2>
            <buton onClick={() => navigate("/")}>Go to Login</buton>
        </div>
    )
}