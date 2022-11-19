import React, { useEffect, useState } from "react";
import { getItemById } from "./utils/getData";

let todosUrl = "https://jsonplaceholder.typicode.com/todos";
const UserComp = ({ user }) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [todos, setTodos] = useState([]);

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
            todos.forEach(todo => {
                if (todo.completed) {
                    counter++;
                }

                if (counter === todo.length) {
                    setIsCompleted(true);
                } else {
                    setIsCompleted(false);
                }
            });
        };
        checkIfComplete();
    }, [todos]);

    return (
        <div
            style={{
                width: "30%",
                padding: "5px",
            }}
        >
            <div
                style={{
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
                <span
                    style={{
                        backgroundColor: "grey",
                    }}
                >
                    Other Data{" "}
                </span>
                <input type='button' value='Update' />
                <input type='button' value='Delete' />
            </div>
        </div>
    );
};

export default UserComp;
