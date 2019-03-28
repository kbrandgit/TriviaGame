import React from 'react';
import './gameover.css';


// Component to notify players the game has finished
// Displays the winner's name and final score
// Renders a back button to navigate to Landing Page

class Gameover extends React.Component {

 

    render() {
        return (
            <body>
            <div className="background">

                <p>some text</p>

                    <div class="card">
                    <div class="card-header">
                        You Won!
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Score: 70</h4>
                        <p class="card-text">Congratulations, Alice!</p>
                        <button href="#!" class="btn btn-dark">Play Again</button>
                    </div>
                </div>	 

            </div>
            </body>
           
        )
    }
}


export default Gameover;