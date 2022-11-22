import React from "react";

const PostComp = ({ post }) => {
    return (
        <div style={{ border: "2px solid gray", margin: "4px" }}>
            <p>Title: {post.title}</p>

            <p>Body: {post.body}</p>
            <br />
        </div>
    );
};

export default PostComp;
