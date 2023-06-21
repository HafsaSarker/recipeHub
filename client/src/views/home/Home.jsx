import Card from "../../components/card/Card"
import './Home.css'

export default function Home() {
    const temp = [
        {
            name:"Recipe Name",
            imgUrl: "https://wholeandheavenlyoven.com/wp-content/uploads/2018/04/Teriyaki-Beef-Stirfry-Closeup-Tongs-Shot.jpg",
            recipeLink: "https://wholeandheavenlyoven.com/2018/04/23/beef-teriyaki-noodle-stir-fry/"
        },

        {
            name:"Recipe Name",
            imgUrl: "https://wholeandheavenlyoven.com/wp-content/uploads/2018/04/Teriyaki-Beef-Stirfry-Closeup-Tongs-Shot.jpg",
            recipeLink: "https://wholeandheavenlyoven.com/2018/04/23/beef-teriyaki-noodle-stir-fry/"
        },
    ]
    return (
        <div className="home">
            <h2>All Recipes</h2>
            <div className="all-recipes">
                {
                    temp.map((item, index) => 
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