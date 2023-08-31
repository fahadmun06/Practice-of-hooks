import React, { useReducer, useRef } from 'react'
import click from '../../../assets/audios/click.wav'

const initialValue = 0

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state > 0 ? state - 1 : initialValue
        case 'RESET':
            return initialValue
        default:
            return state
    }
}
export default function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialValue)

    const clickNotify = useRef(null)

    return (
        <>
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className="text-center"> Use Reducer</h1>
                            <hr />
                            <audio src={click} ref={clickNotify}></audio>
                            <button className='btn btn-success my-3' onClick={() => { dispatch({ type: 'INCREMENT' }) }}>Increment</button>
                            <p className='text-center fs-5 mb-0'>You clicked <b className='fs-4'>{state}</b> times.</p>
                            <button className='btn btn-danger my-3' onClick={() => { dispatch({ type: 'DECREMENT' }) }}>Decrement</button>
                            <br />
                            <button className='btn btn-info my-3' onClick={() => { dispatch({ type: 'RESET' }) }}>Reset</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}