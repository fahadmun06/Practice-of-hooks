import React, { useContext } from 'react'
import { NameContext } from '../../../context/NameContext'

export default function About() {

    const { userName } = useContext(NameContext)
    return (
        <>
            <main className='py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center">Welcome {userName} About Page</h1>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
