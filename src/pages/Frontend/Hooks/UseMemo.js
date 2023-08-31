import React, { useState, useMemo } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };
    return (
        <>
            <main className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">useMemo Examples</h1>
                        </div>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <h2>My Todos</h2>
                            <button className='btn btn-info' onClick={addTodo}>Add Todo</button>
                            {todos.map((todo, index) => {
                                return <p key={index}>{todo}</p>;
                            })}
                        </div>
                        <div className="col text-center">
                            <h2 className='text-center my-3'>Expensive Calculation</h2>
                            <button className='btn btn-success' onClick={increment}>+</button>
                            {calculation}
                            <p>Count: {count} </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};