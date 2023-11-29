import {useNavigate} from 'react-router-dom'
export default function Admin (){
    const navigate = useNavigate()
    return (
        <div>
            <h2>Admin Page</h2>
          <button onClick={() => navigate("/admin" )}>Go to Login</button>
        </div>
    )
}