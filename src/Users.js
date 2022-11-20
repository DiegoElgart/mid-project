import React, { useState, useEffect } from "react";
import UserComp from "./User";
import { getAll } from "./utils/getData";

let userUrl = "https://jsonplaceholder.typicode.com/users";
// let postsUrl = "https://jsonplaceholder.typicode.com/posts";

const UsersComp = () => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const getAllUsers = async () => {
            const { data: usersData } = await getAll(userUrl);
            setUsers(usersData);
        };

        getAllUsers();
    }, []);

    const updateUser = (id, newName, newEmail) => {
        console.log(id, newName, newEmail);
        const updatedUsers = users.map(user => {
            if (id === user.id) {
                return { ...user, name: newName, email: newEmail };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    const deleteUser = id => {
        const deletedUser = users.filter(user => {
            return user.id !== id;
        });
        setUsers(deletedUser);
    };
    return (
        <div>
            <div className='header' style={{ height: "25px" }}>
                Search:{" "}
                <input
                    type='text'
                    placeholder='Enter a name or mail...'
                    onChange={e => setQuery(e.target.value)}
                />
                <input type='button' value='Add' />
            </div>

            {users
                .filter(
                    user =>
                        user.name.toLowerCase().includes(query) ||
                        user.email.toLowerCase().includes(query)
                )
                .map(user => (
                    <UserComp
                        key={user.id}
                        user={user}
                        updateUser={updateUser}
                        deleteUser={deleteUser}
                    />
                ))}
        </div>
    );
};

export default UsersComp;
