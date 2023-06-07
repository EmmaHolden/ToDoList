import {useState} from 'react';

const Counter = ({items, complete, setComplete, goal, setGoal}) => {

    return (
        <div className = "counter">
            <div>
                {complete > goal ? 
                (<h2>You have completed {complete} task(s) today! You have exceeded your goal!</h2>)
                : complete == goal ?
                (<h2>You have completed {complete} task(s) today. You have met your goal!</h2>)
                :
                (<h2>You have completed {complete} task(s) today. You have not met your goal yet.</h2>)}
            </div>
            <div>
                <button id = "resetComplete" onClick = {() => setComplete(0)}>Reset Completed Tasks</button>
            </div>
        </div>
    );
};

export default Counter;