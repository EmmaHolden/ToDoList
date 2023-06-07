import {useState} from 'react';

const Goal = ({goal, setGoal}) => {
    
    const addOne = () => {
        let newGoal = goal
        newGoal += 1
        setGoal(newGoal)
    }

    const minusOne = () => { 
        if (goal > 0) { 
            let newGoal = goal
            newGoal -= 1
            setGoal(newGoal)
        }
       
    }

    return (
        <div>
            <h2>Set your goal</h2>
            <div className = "container2">
                <button className = "plusMinusButtons" onClick = {minusOne}>-</button>
                <h2>{goal}</h2>
                <button className = "plusMinusButtons" onClick = {addOne}>+</button>
            </div>
        </div>
    );
};

export default Goal;