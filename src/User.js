import React from "react";

const UserComp = ({ user, todo, post }) => {
    const completed = () => {
        let color = "";
        todo.forEach(x => {
            if (todo.completed) {
                color = "green";
            } else {
                color = "red";
            }
        });
        return color;
    };

    return (
        <div style={{ width: "30%" }}>
            <div style={{ border: `1px solid ${completed()} ` }}>
                <h5>ID:{user.id} </h5>
                <label>Name :</label>
                <input type='text' defaultValue={user.name} />
                <br />
                <label>Email: </label>
                <input type='text' defaultValue={user.email} />

                <br />
                <br />
                <span style={{ backgroundColor: "grey" }}>Other Data </span>
                <input type='button' value='Update' />
                <input type='button' value='Delete' />
            </div>
        </div>
    );
};

export default UserComp;
