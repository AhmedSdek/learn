"use client";

import { useEffect, useState } from "react";

function Todo() {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => setData(json))
    }, []);
    // console.log(data)
    return (
        <div>
            <h1>Todo</h1>
            <p>
                {data.title}
            </p>
        </div>
    )
}

export default Todo