import React, { useContext } from 'react'
import { NameContext } from '../../../context/NameContext'

export default function Home() {
  const { userName } = useContext(NameContext)
  return (
    <>
      <main className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Welcome {userName} to Home Page</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
