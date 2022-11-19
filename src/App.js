import React from "react";
import UsersComp from "./Users";

function App() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <h1>The App </h1>
            <UsersComp />
        </div>
    );
}

export default App;
