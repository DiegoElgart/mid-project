import React, { useState } from "react";

const NewUser = ({ newUser, users, cancel }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const addUser = () => {
        if (name !== "" && email !== "") {
            newUser({
                id: users + 1,
                name,
                email,
                address: "",
                city: "",
                zipcode: "",
            });
        } else {
            alert("need to fill fields");
        }
    };

    return (
        <div style={{ border: "3px solid aqua", padding: "15px" }}>
            <h3>Add a new User</h3>
            <label>Name: </label>
            <input type='text' onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <label>Email: </label>
            <input
                type='email'
                onChange={e => {
                    setEmail(e.target.value);
                }}
            />
            <br />
            <br />
            <input type='button' value='Cancel' onClick={cancel} />
            <input type='button' value='Add' onClick={addUser} />
        </div>
    );
};

export default NewUser;
