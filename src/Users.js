import React, { useState, useEffect } from "react";
import UserComp from "./User";
import { getAll } from "./utils/getData";

let userUrl = "https://jsonplaceholder.typicode.com/users";
let todosUrl = "https://jsonplaceholder.typicode.com/todos";

const UsersComp = () => {
    const [users, setUsers] = useState("");
    const [todos, setTodos] = useState("");

    useEffect(() => {
        const getAllUsers = async () => {
            const { data: usersData } = await getAll(userUrl);
            setUsers(usersData);
        };
        const getAllTodos = async () => {
            const { data: todosData } = await getAll(todosUrl);
            setTodos(todosData);
        };

        getAllTodos();
        getAllUsers();
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <div className='header' style={{ height: "25px" }}>
                Search: <input type='text' />
                <input type='button' value='Add' />
            </div>

            {users && <UserComp users={users} />}
        </div>
    );
};

export default UsersComp;
