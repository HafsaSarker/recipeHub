import { useParams } from 'react-router-dom'
import './ViewPost.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { path } from '../../api'
import { AiFillEdit } from 'react-icons/ai'

export default function ViewPost(){
    const {id} = useParams()
    const [viewPost, setViewPost] = useState([])
    
    useEffect(() => {
        async function getSinglePost(){
            try {
                const res = await axios.get(`${path}/${id}`)
                setViewPost(res.data.entry)
            } catch (error) {
                console.log(error)
            }
        }

        getSinglePost()
    }, [])
    
    return (
        <div>
            { 
                viewPost && 
                <div className="ViewPost">
                    <div className="top">
                        <h3>{viewPost.name}</h3>
                        <span>
                            <AiFillEdit/>
                        </span>
                    </div>
                    <img src={viewPost.imgUrl}/>
                    <a href={viewPost.recipeLink}>
                        <button>View Recipe</button>
                    </a>
                </div>

            }
        </div>
    )
}