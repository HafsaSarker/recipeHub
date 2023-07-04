import { useState } from 'react'
import './Register.css'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    })
    function handleChange(e){
        const {name, value} = e.target 

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    function createUser(e){
        e.preventDefault()

        console.log(formData);
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