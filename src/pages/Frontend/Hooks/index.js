import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UseState from './UseState'
import UseEffect from './UseEffect'
import UseRef from './UseRef'
import UseMemo from './UseMemo'
import UseContext from './UseContext'
import UseReducer from './UseReducer'

export default function index() {
    return (
        <>
            <Routes>
                <Route path='useState' element={<UseState />} />
                <Route path='useEffect' element={<UseEffect />} />
                <Route path='useRef' element={<UseRef />} />
                <Route path='useMemo' element={<UseMemo />} />
                <Route path='useContext' element={<UseContext />} />
                <Route path='useReducer' element={<UseReducer />} />
            </Routes>
        </>
    )
}
