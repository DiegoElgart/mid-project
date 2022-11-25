import React, { useEffect, useState } from "react";
import TodoComp from "./Todo";
import PostComp from "./Post";
import NewTodo from "./newTodo";
import NewPost from "./newPost";
import { getItemById } from "./utils/getData";

let todosUrl = "https://jsonplaceholder.typicode.com/todos";
let postsUrl = "https://jsonplaceholder.typicode.com/posts";
const UserComp = ({ user, updateUser, deleteUser }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [todos, setTodos] = useState([]);
    const [posts, setPosts] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [newName, setNewName] = useState(user.name);
    const [newEmail, setNewEmail] = useState(user.email);
    const [isClicked, setIsClicked] = useState(false);
    const [isAddTodo, setIsAddTodo] = useState(false);
    const [isAddPost, setIsAddPost] = useState(false);

    useEffect(() => {
        const getAllTodos = async () => {
            const { data: todosData } = await getItemById(todosUrl, user.id);
            setTodos(todosData);
        };
        const getAllPosts = async () => {
            const { data: postsData } = await getItemById(postsUrl, user.id);
            setPosts(postsData);
        };
        getAllTodos();
        getAllPosts();
    }, []);

    useEffect(() => {
        let counter = 0;
        const checkIfComplete = () => {
            todos.map(todo => {
                if (todo.completed) {
                    counter++;
                }

                if (counter >= todos.length) {
                    setIsCompleted(true);
                } else {
                    setIsCompleted(false);
                }
                return counter;
            });
        };

        checkIfComplete();
    }, [todos, posts]);

    const markComplete = id => {
        const index = todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todos[index].completed = true;
            setTodos([...todos], todos[index].completed);
        }
    };
    const handleUpdate = () => {
        updateUser(user.id, newName, newEmail);
    };
    const handeleDelete = () => {
        deleteUser(user.id);
    };

    const addTodoMode = () => {
        setIsClicked(!isClicked);
        setIsAddTodo(!isAddTodo);
    };
    const addPostMode = () => {
        setIsClicked(!isClicked);
        setIsAddPost(!isAddPost);
    };
    const addTodo = todo => {
        setTodos([...todos, todo]);
        setIsAddTodo(!isAddTodo);
        setIsClicked(!isClicked);
    };
    const addPost = post => {
        setPosts([...posts, post]);
        setIsAddPost(!isAddPost);
        setIsClicked(!isClicked);
    };

    return (
        <div className='container' style={{ display: "flex" }}>
            <div
                className='userCard'
                onClick={e => setIsClicked(!isClicked)}
                style={{
                    width: "20%",
                    padding: "5px",
                    margin: "10px",
                    height: "300px",
                    border: `4px solid ${isCompleted ? "green" : "red"} `,
                    backgroundColor: `${isClicked ? "orange" : "white"}`,
                }}
            >
                <h5>ID:{user.id} </h5>
                <label>Name :</label>
                <input
                    type='text'
                    defaultValue={user.name}
                    onChange={e => setNewName(e.target.value)}
                />
                <br />
                <label>Email: </label>
                <input
                    type='text'
                    defaultValue={user.email}
                    onChange={e => setNewEmail(e.target.value)}
                />

                <br />
                <br />
                <div
                    style={{
                        backgroundColor: "lightgrey",
                        height: "30px",
                        width: "80px",
                        margin: "15px",
                        textAlign: "center",
                        border: "1px solid black",
                        borderRadius: "5px",
                    }}
                    onMouseOver={e => setIsVisible(true)}
                    onClick={e => setIsVisible(false)}
                >
                    Other Data
                </div>
                <input type='button' value='Update' onClick={handleUpdate} />
                <input type='button' value='Delete' onClick={handeleDelete} />
                <br />
                <div
                    style={{
                        backgroundColor: "AliceBlue",
                        border: "1px solid blue",
                        borderRadius: "5px",
                        padding: "15px",
                        margin: "5px",
                        display: `${isVisible ? "block" : "none"}`,
                    }}
                >
                    <label>Street :</label>
                    <input type='text' defaultValue={user.address.street} />
                    <br />
                    <label>City: </label>
                    <input type='text' defaultValue={user.address.city} />
                    <br />
                    <label>Zip Code: </label>
                    <input type='text' defaultValue={user.address.zipcode} />
                </div>
            </div>
            <div className='container' style={{ width: "400px" }}>
                <div className='todos'>
                    {isClicked ? (
                        <div style={{ border: "3px solid black" }}>
                            <input
                                type='button'
                                value='Add'
                                onClick={addTodoMode}
                            />
                            <h5>Todos - {user.id}</h5>
                            {todos &&
                                todos.map(todo => (
                                    <TodoComp
                                        key={todo.id}
                                        todo={todo}
                                        markComplete={markComplete}
                                    />
                                ))}
                        </div>
                    ) : null}
                    {isAddTodo && !isClicked ? (
                        <NewTodo
                            addTodoMode={addTodoMode}
                            addTodo={addTodo}
                            userId={user.id}
                            todos={todos.length}
                        />
                    ) : null}
                </div>
                <br />
                <br />
                <div className='posts'>
                    {isClicked ? (
                        <div style={{ border: "3px solid gray" }}>
                            <input
                                type='button'
                                value='Add'
                                onClick={addPostMode}
                            />
                            <h5>Posts - {user.id}</h5>
                            {posts.map(post => (
                                <PostComp key={post.id} post={post} />
                            ))}
                        </div>
                    ) : null}
                    {isAddPost && !isClicked ? (
                        <NewPost
                            addPostMode={addPostMode}
                            addPost={addPost}
                            userId={user.id}
                            posts={posts.length}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default UserComp;
