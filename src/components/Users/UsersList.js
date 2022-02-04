import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                <h2>Loaded UserDeatils</h2>
                {props.users.map((user) => (
                    <li key={user.id} onClick={props.onRemoveItem.bind(this, user.id)}>
                        <span>  {user.name}</span>
                        <span>({user.age} years old)</span>
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UsersList;