import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
import { createContext, useContext } from 'react';
import AppContext from '../AppContext';



//class QuestionTwo extends Component {

//    render() {


//        return (
//            //<AppContext.Consumer>
//            //    {value => (
//                    <div>
//                        <h1>Question 2</h1>
//                        <p>Do you use any solar energy sources?</p>
//                        <div>
//                            <input type="radio" id="yes" name="solarEnergy" value="yes" />
//                            <label htmlFor="yes">Yes</label>
//                        </div>
//                        <div>
//                            <input type="radio" id="no" name="solarEnergy" value="no" />
//                            <label htmlFor="no">No</label>
//                        </div>
//                        <div>
//                            <button onClick={this.props.onNextQuestion}>Next Question</button>
//                        </div>
//                        <div>{console.log(value)}</div>
//                    </div>
//                )}
//            //</AppContext.Consumer>
//        );
//    }
//}

//export default QuestionTwo;


const QuestionTwo = () => {

    const navigate = useNavigate();

    const handleNext = () => {
        navigate("/QuestionTwo");
        //console.log(test1);
    }

    const v = useContext(AppContext)


    return (


            <div>
                <h1>Question 2</h1>
                <p>Do you use any solar energy sources?</p>
                <div>
                    <input type="radio" id="yes" name="solarEnergy" value="yes" />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div>
                    <input type="radio" id="no" name="solarEnergy" value="no" />
                    <label htmlFor="no">No</label>
                </div>

                <div>
                    <button onClick={handleNext}>Next Question</button>
                </div>
            { console.log(v)}

            </div>
    );
};

export default QuestionTwo;