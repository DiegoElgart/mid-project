import React from "react";

const TodoComp = ({ todo }) => {
    return (
        <div style={{ border: "2px solid gray", margin: "4px" }}>
            <label>Title: {todo.title}</label>
            <br />
            <label>Completed: {todo.completed ? "True" : "False"}</label>
            <br />
            {!todo.completed ? (
                <input type='button' value='Mark Completed' />
            ) : null}
        </div>
    );
};

export default TodoComp;
