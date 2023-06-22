import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { path } from '../../api'
import './EditPost.css'

export default function EditPost({posts}){
    const {id} = useParams()

    const filterPost = posts.filter((item) => item._id == id)[0]

    const [editPost, setEditPost] = useState(filterPost)

    function handleChange(e){
        const {name, value} = e.target 

        setEditPost((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    
    async function updatePost(e){
        e.preventDefault()
        
        try {
            const {data} = await axios.patch(`${path}/${id}`, editPost)

            window.location ='/'
            return data   
        } catch (error) {
            console.log(error)
        }
    }
    
    async function deletPost(){
        try {
            await axios.delete(`${path}/${id}`)
            window.location = '/'
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="edit-page">
            <h2>Edit post</h2>
            <form className='edit-post-form' onSubmit={updatePost}>
                <label>
                    recipe title:
                    <input 
                        type="text"
                        name='name'
                        value={editPost.name}
                        required
                        onChange={handleChange}
                    />
                </label>
                <label>
                    image url:
                    <input 
                        type="text"
                        name='imgUrl'
                        value={editPost.imgUrl}
                        required
                        onChange={handleChange}
                    />
                </label>
                <label>
                    recipe link:
                    <input 
                        type="text"
                        name='recipeLink'
                        value={editPost.recipeLink}
                        required
                        onChange={handleChange}
                    />
                </label>
                <div className="btncont">
                    <button type='submit'>Update</button>
                    <button type='button' onClick={deletPost}>Delete</button>
                </div>
                
            </form>
        </div>
    )
}