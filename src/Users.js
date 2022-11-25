import React, { useState, useEffect } from "react";
import UserComp from "./User";
import { getAll } from "./utils/getData";
import NewUser from "./NewUser";

let userUrl = "https://jsonplaceholder.typicode.com/users";

const UsersComp = () => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const getAllUsers = async () => {
            const { data: usersData } = await getAll(userUrl);
            setUsers(usersData);
        };

        getAllUsers();
    }, []);
    const newUser = user => {
        setUsers([...users, user]);
        setIsClicked(!isClicked);
    };
    const cancel = () => setIsClicked(!isClicked);
    const updateUser = (id, newName, newEmail) => {
        console.log(id, newName, newEmail);
        const updatedUsers = users.map(user => {
            if (id === user.id) {
                return { ...user, name: newName, email: newEmail };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    const deleteUser = id => {
        const deletedUser = users.filter(user => {
            return user.id !== id;
        });
        setUsers(deletedUser);
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexWrap: "nowrap",
            }}
        >
            <div className='header' style={{ height: "25px" }}>
                Search:{" "}
                <input
                    type='text'
                    placeholder='Enter a name or mail...'
                    onChange={e => setQuery(e.target.value)}
                />
                <input
                    type='button'
                    value='Add'
                    onClick={e => setIsClicked(true)}
                />
            </div>

            {users
                .filter(
                    user =>
                        user.name.toLowerCase().includes(query) ||
                        user.email.toLowerCase().includes(query)
                )
                .map(user => (
                    <UserComp
                        key={user.id}
                        user={user}
                        updateUser={updateUser}
                        deleteUser={deleteUser}
                    />
                ))}
            <div
                style={{
                    position: "fixed",
                    top: "20%",
                    left: "30%",
                }}
            >
                {isClicked ? (
                    <NewUser
                        users={users.length}
                        newUser={newUser}
                        cancel={cancel}
                    />
                ) : null}
            </div>
        </div>
    );
};

export default UsersComp;
