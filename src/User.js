import React, { useEffect, useState } from "react";
import { getItemById } from "./utils/getData";

let todosUrl = "https://jsonplaceholder.typicode.com/todos";
const UserComp = ({ user, updateUser, deleteUser }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [todos, setTodos] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [newName, setNewName] = useState(user.name);
    const [newEmail, setNewEmail] = useState(user.email);

    useEffect(() => {
        const getAllTodos = async () => {
            const { data: todosData } = await getItemById(todosUrl, user.id);
            setTodos(todosData);
        };

        getAllTodos();
    }, []);

    useEffect(() => {
        let counter = 0;
        const checkIfComplete = () => {
            todos.map(todo => {
                if (todo.completed) counter++;
                let todoLength = Object.keys(todos).length;
                if (counter === todoLength) {
                    setIsCompleted(true);
                } else {
                    setIsCompleted(false);
                }
                return counter;
            });
        };
        checkIfComplete();
    }, [todos]);
    const handleUpdate = () => {
        //console.log(user.id, newName, newEmail);
        updateUser(user.id, newName, newEmail);
    };
    const handeleDelete = () => {
        deleteUser(user.id);
    };
    return (
        <div
            style={{
                width: "30%",
                padding: "5px",
                margin: "10px",
                border: `4px solid ${isCompleted ? "green" : "red"} `,
            }}>
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
                    height: "20px",
                    width: "80px",
                    margin: "15px",
                }}
                onMouseOver={e => setIsVisible(true)}
                onClick={e => setIsVisible(false)}>
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
                }}>
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
    );
};

export default UserComp;
