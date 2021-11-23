import React from "react";

function TodoList (props) {
    return (
        <div>
            <ul>
                {props.children}
            </ul>
        </div>
    )
}

export { TodoList };