import { useState } from 'react'
import './Login.css'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    async function handleChange(e){
        const {name, value} = e.target 

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function loginUser(e){
        e.preventDefault()

        console.log(formData);
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