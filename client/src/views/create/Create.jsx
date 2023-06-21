import { useState } from 'react'
import './Create.css'

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
    
    function createPost(e){
        e.preventDefault()
        console.log(newPost)
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