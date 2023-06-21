import Card from "../../components/card/Card"
import './Home.css'

export default function Home({posts}) {
    console.log(posts.allEntries)

    return (
        <div className="home">
            <h2>All Recipes</h2>
            <div className="all-recipes">
                {   
                    posts &&
                    posts.map((item, index) => 
                        <Card 
                            key={index}
                            name={item.name}
                            imgUrl={item.imgUrl}
                            recipeLink={item.recipeLink}
                        />
                    )
                }
            </div>
            
        </div>
    )
}