import { useEffect, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { logInUser, reset } from '../../features/auth/authSlice'
import Spinner from '../../components/spinner/Spinner'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    
    const {email, password} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user) {
            navigate('/home')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])
    
    async function handleChange(e){
        const {name, value} = e.target 

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function loginUser(e){
        e.preventDefault()

        const userData = {
            email,
            password
        }

        dispatch(logInUser(userData))
    }

    if(isLoading) {
        return <Spinner />
    }
  return (
    <div className="login">
        <h2>Welcome back :)</h2>
        <form className='login-form' onSubmit={loginUser}>
            <label>
                email:
                <input 
                    type="email"
                    name='email'
                    onChange={handleChange}
                    required 
                />
            </label>
            <label>
                password:
                <input 
                    type="password"
                    name='password'
                    onChange={handleChange}
                    required 
                />
            </label>
            <button>Log in</button>
        </form>
    </div>
  )
}

export default Login