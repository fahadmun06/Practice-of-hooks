import React, { useState, useEffect } from 'react'
export default function UseEffect() {

    const [documents, setDocuments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setDocuments(json))
    })

    return (
        <main>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center my-5">Use Effect</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone No</th>
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {documents.map((element, i) => {
                                        return (
                                            <tr key={i}>
                                                <th>{i + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.phone}</td>
                                                <td>{element.address.street}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
