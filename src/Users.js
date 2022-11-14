import React, { useState, useEffect } from "react";
import UserComp from "./User";
import { getAll } from "./utils/getData";

let userUrl = "https://jsonplaceholder.typicode.com/users";
let todosUrl = "https://jsonplaceholder.typicode.com/todos";
let postsUrl = "https://jsonplaceholder.typicode.com/posts";

const UsersComp = () => {
    const [users, setUsers] = useState("");
    const [todos, setTodos] = useState("");
    const [posts, setPosts] = useState("");

    useEffect(() => {
        const getAllUsers = async () => {
            const { data: usersData } = await getAll(userUrl);
            setUsers(usersData);
        };
        const getAllTodos = async () => {
            const { data: todosData } = await getAll(todosUrl);
            setTodos(todosData);
        };
        const getAllPosts = async () => {
            const { data: postsData } = await getAll(postsUrl);
            setPosts(postsData);
        };
        getAllTodos();
        getAllUsers();
        getAllPosts();
    }, []);

    return (
        <div>
            <div className='header' style={{ height: "25px" }}>
                Search: <input type='text' />
                <input type='button' value='Add' />
            </div>

            {users &&
                users.map(user => (
                    <UserComp
                        key={user.id}
                        user={user}
                        post={posts.filter(post => post.userId === user.id)}
                        todo={todos.filter(todo => todo.userId === user.id)}
                    />
                ))}
        </div>
    );
};

export default UsersComp;
