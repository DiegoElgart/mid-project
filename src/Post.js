import React from "react";

const PostComp = ({ post }) => {
    return (
        <div style={{ border: "2px solid gray", margin: "4px" }}>
            <h4>Title: {post.title}</h4>

            <p>Body: {post.body}</p>
            <br />
        </div>
    );
};

export default PostComp;
