import { Link } from "react-router-dom";
import { AiFillEdit } from 'react-icons/ai';
import './Card.css'

export default function Card({id, name, imgUrl, recipeLink, cuisine, TotTime }) {

    return (
        <div className="recipe-card">
            <div className="top">
                <h3>{name}</h3>
                
                <Link to={`/posts/edit/${id}`}>
                    <span>
                        <AiFillEdit/>
                    </span>
                </Link>
                
            </div>

            <div className="recipe-info">
                <p className="highlight">{cuisine}</p>
                <p>Time: {TotTime}</p>
            </div>

            <Link to={`/posts/${id}`}>
                <img src={imgUrl} />
            </Link>
            
            <a href={recipeLink} target='_blank'>
                <button>
                    Get Recipe
                </button>
            </a>
        </div>
    )
}