import React from "react";

import classes from "./usersList.module.css";
import Card from "../UI/card";


const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.user.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </Card>
    );
};
export default UserList;
