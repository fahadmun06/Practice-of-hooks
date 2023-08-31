import React from 'react'
import picture from '../../assets/images/pngegg.png'

export default function NoPageFound() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="row my-5 text-center">
                        <div className="col">
                            <img src={picture} alt='png' style={{ width: 500 }} />
                            <div className="text-center">
                                <h3 className='my-3'>This page could not be found</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
