import {useState} from 'react';

const Form = ({input, setInput, handleSubmit}) => {
    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <label>
                    What do you need to do?:    
                    <input 
                    type ="text"
                    value = {input}
                    onChange = { (event) => setInput (event.target.value)}/>
                </label>
                <button id = "submit" type = "submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;