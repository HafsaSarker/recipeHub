import { AiFillEdit } from 'react-icons/ai';
import './Card.css'

export default function Card({name, imgUrl, recipeLink}) {

    return (
        <div className="recipe-card">
            <div className="top">
                <h3>{name}</h3>
                <span>
                    <AiFillEdit/>
                </span>
            </div>
            
            <img src={imgUrl} />
            <a href={recipeLink} target='_blank'>
                <button>
                    Get Recipe
                </button>
            </a>
        </div>
    )
}