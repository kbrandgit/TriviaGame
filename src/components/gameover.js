import React from 'react';
import './gameover.css';


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
                            <button href="#!" className="btn btn-dark">Play Again</button>
                        </div>
                    </div>
                </div>	 

            </div>
       
           
        )
    }
}


export default Gameover;