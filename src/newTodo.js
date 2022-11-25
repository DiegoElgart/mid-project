import React, { useState } from "react";

const NewTodo = ({ addTodo, userId, todos, addTodoMode }) => {
    const [title, setTitle] = useState("");

    const sendTodo = () => {
        if (title.length > 1) {
            addTodo({
                userId: userId,
                id: todos + 1,
                title: title,
                completed: false,
            });
        } else {
            alert("Must fill title");
        }
    };
    const cancel = () => addTodoMode();

    return (
        <div>
            <h4>Add a Todo</h4>
            <label>Title: </label>
            <input type='text' onChange={e => setTitle(e.target.value)} />
            <br />
            <br />
            <button onClick={cancel}>Cancel</button>
            <button onClick={sendTodo}>Add</button>
        </div>
    );
};

export default NewTodo;
