import React from "react";

const UserComp = ({ users }) => {
    return (
        <div style={({ width: "50%" }, { flex: "left" })}>
            {users.map(user => (
                <div
                    key={user.id}
                    style={{
                        border: "3px solid green",
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
                    <span style={{ backgroundColor: "grey" }}>Other Data </span>
                    <input type='button' value='Update' />
                    <input type='button' value='Delete' />
                </div>
            ))}
        </div>
    );
};

export default UserComp;
