import React, { useEffect, useState } from "react";
import { getItemById } from "./utils/getData";

let todosUrl = "https://jsonplaceholder.typicode.com/todos";
const UserComp = ({ user }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [todos, setTodos] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

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

    return (
        <div
            style={{
                width: "30%",
                padding: "5px",
                margin: "10px",
                border: `4px solid ${isCompleted ? "green" : "red"} `,
            }}
        >
            <h5>ID:{user.id} </h5>
            <label>Name :</label>
            <input type='text' defaultValue={user.name} />
            <br />
            <label>Email: </label>
            <input type='text' defaultValue={user.email} />

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
                onClick={e => setIsVisible(false)}
            >
                Other Data
            </div>
            <input type='button' value='Update' />
            <input type='button' value='Delete' />
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
    );
};

export default UserComp;
