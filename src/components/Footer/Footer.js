import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <footer className='bg-primary py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="text-center text-light mb-0">&copy;{year} | All Right Reserveds.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
