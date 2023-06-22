import { Link } from "react-router-dom";
import { AiFillEdit } from 'react-icons/ai';
import './Card.css'

export default function Card({id, name, imgUrl, recipeLink}) {

    return (
        <div className="recipe-card">
            <div className="top">
                <h3>{name}</h3>
                <span>
                    <AiFillEdit/>
                </span>
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