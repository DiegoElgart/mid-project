import React, { useState } from "react";

const NewPost = ({ addPost, userId, posts, addPostMode }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const sendPost = () => {
        if (title.length > 1 && body.length > 1) {
            addPost({
                userId: userId,
                id: posts + 1,
                title: title,
                body: body,
            });
        } else {
            alert("Must fill title and body in order to post");
        }
    };
    const cancel = () => addPostMode();

    return (
        <div>
            <h4>Add a Post</h4>
            <label>Title: </label>
            <input type='text' onChange={e => setTitle(e.target.value)} />
            <br />
            <label>Body: </label>
            <input type='text' onChange={e => setBody(e.target.value)} />
            <br />
            <button onClick={cancel}>Cancel</button>
            <button onClick={sendPost}>Add</button>
        </div>
    );
};

export default NewPost;
