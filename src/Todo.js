import React from "react";

const TodoComp = ({ todo, markComplete }) => {
    //console.log(todo);
    const handleClick = () => {
        markComplete(todo.id);
        todo.completed = true;
    };
    return (
        <div style={{ border: "2px solid gray", margin: "4px" }}>
            <label>Title: {todo.title}</label>
            <br />

            <label>Completed: {todo.completed ? "True" : "False"}</label>
            <br />
            {!todo.completed ? (
                <input
                    type='button'
                    value='Mark Completed'
                    onClick={handleClick}
                />
            ) : null}
        </div>
    );
};

export default TodoComp;
