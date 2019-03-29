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

                <div className="gameover-container">
                    <div className="gameover-row">
                        <div className="gameover-col">
                            You Won!
                            <h3 className="gameover-score">Score: 70</h3>
                            <h2 className="gameover-text"><em>Congratulations, Alice!</em></h2> 
                          
                            <Link to="/landing" id="btn-playagain" className="btn">Play Again</Link>
                        </div>
                    </div>
                </div>	 

            </div>
       
           
        )
    }
}


export default Gameover;