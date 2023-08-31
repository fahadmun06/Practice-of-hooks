import React, { useRef, useState } from 'react'
import click from '../../../assets/audios/click.wav';

export default function UseContext() {
    const [count, setCount] = useState(0)
    const clickNotify = useRef(null)

    const handleIncriment = () => {
        setCount(count + 1)
        clickNotify.current.play()
    }
    const handleDecrement = () => {
        setCount(count > 0 ? count - 1 : 0)
        clickNotify.current.play()
    }

    return (
        <>
            <main>
                <div className="container my-5">
                    <div className="row">
                        <div className="col text-center">
                            <h1 className="text-center">useContext</h1>
                            <hr />
                            <audio src={click} ref={clickNotify}></audio>
                            <button className='btn btn-success my-3' onClick={handleIncriment}>Increment</button>
                            <p className='text-center fs-5 mb-0'>You clicked <b className='fs-4'>{count}</b> times.</p>
                            <button className='btn btn-danger my-3' onClick={handleDecrement}>Decrement</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
