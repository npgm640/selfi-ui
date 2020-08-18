import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

import './UsersList.css';

//gets the items prop into the  UsersList from Users.js
const UsersList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Users Found yet</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="users-list">
            {props.items.map(user => (
                <UserItem
                    key={user.id}
                    id={user.id}
                    image={user.image}
                    name={user.name}
                    placeCount={user.places}/>
            ))}
        </ul>
    )
};

export default UsersList;