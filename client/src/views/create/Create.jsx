import { useState } from 'react'
import './Create.css'
import axios from 'axios'
import { path } from '../../api'

export default function Create() {
    const [newPost, setNewPost] = useState({
        name: '',
        imgUrl: '',
        recipeLink: ''
    })

    function handleChange(e){
        const {name, value} = e.target 

        setNewPost((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    async function createPost(e){
        e.preventDefault()
        
        try {
            const res = await axios.post(`${path}/create`, newPost)

            window.location ='/'
            return res.data   
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="create-page" onSubmit={createPost}>
            <form className='create-post-form'>
                <label>
                    recipe title:
                    <input 
                        type="text"
                        name='name'
                        required
                        onChange={handleChange}
                    />
                </label>
                <label>
                    image url:
                    <input 
                        type="text"
                        name='imgUrl'
                        required
                        onChange={handleChange}
                    />
                </label>
                <label>
                    recipe link:
                    <input 
                        type="text"
                        name='recipeLink'
                        required
                        onChange={handleChange}
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}