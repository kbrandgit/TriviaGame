import React from 'react';
import './gameover.css';
import { Link } from "react-router-dom";


// Component to notify players the game has finished
// Displays the winner's name and final score
// Renders a back button to navigate to Landing Page

class Gameover extends React.Component {

 

    render() {
        return (

       
            <div className="background">

                <div class="gameover-container">
                    <div class="gameover-row">
                        <div class="gameover-col">
                            You Won!
                            <h3 class="gameover-score">Score: 70</h3>
                            <h2 class="gameover-text"><em>Congratulations, Alice!</em></h2> 
                          
                            <Link to="/landing" id="btn-playagain" className="btn">Play Again</Link>
                        </div>
                    </div>
                </div>	 

            </div>
       
           
        )
    }
}


export default Gameover;