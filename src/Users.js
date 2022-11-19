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
                    <UserComp key={user.id} user={user} />
                ))}
        </div>
    );
};

export default UsersComp;
