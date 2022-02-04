import React, { useState } from "react";
import Card from "../UI/card";
import Classes from "./user.module.css";
import Button from "../UI/button";


const User = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');



    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        console.log(enteredUsername, enteredAge);

        setEnteredAge('');
        setEnteredUsername('');



    };
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return (
        <Card className={Classes.input} >
            <form onSubmit={addUserHandler}  >
                <label htmlFor="user">User</label>
                <input type="text" id="user" value={enteredUsername} onChange={usernameChangeHandler} />
                <label htmlFor="age">age</label>
                <input type="number" id="age" value={enteredAge}
                    onChange={ageChangeHandler}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );

};
export default User;