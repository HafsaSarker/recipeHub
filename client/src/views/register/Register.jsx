import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {register, reset} from '../../features/auth/authSlice'
import Spinner from '../../components/spinner/Spinner'
import './Register.css'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    })

    const {name, email, password, confirmPass} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    //watch for changes in user, isError, etc...
    useEffect(() => {
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/home')
        }
        //if everything is ok, reset
        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    async function handleChange(e){
        const {name, value} = e.target 

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function createUser(e){
        e.preventDefault()

        if(password != confirmPass) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password
            }
            
            //dispatch user data, 
            //calls the register function from authService
            dispatch(register(userData))
        }
    }

    if(isLoading) {
        return <Spinner />
    }
    
  return (
    <div className="register">
        <h2>Create a new account</h2>
        <form className='reg-form' onSubmit={createUser}>
            <label>
                name:
                <input 
                    type="text"
                    name='name'
                    onChange={handleChange}
                    required 
                />
            </label>
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
            <label>
                confirm password:
                <input 
                    type="password"
                    name='confirmPass'
                    onChange={handleChange}
                    required 
                />
            </label>
            <button>Create Account</button>
        </form>
    </div>
  )
}

export default Register