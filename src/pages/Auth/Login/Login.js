import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Input, message } from 'antd'
import { NameContext } from '../../../context/NameContext'

export default function Login() {
    const { userName, setUserName } = useContext(NameContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = () => {

        console.log('userName', userName)
    }

    const handleSubmit = () => {
        if (!email) {
            return message.error("Enter your Email correctly")
        }
        if (!userName) {
            return message.error("Enter your Name correctly")
        }
        if (!password) {
            return message.error("Enter your Password correctly")
        }
        message.success("successfully login")
        console.log('userName', userName)
        console.log('password', password)
    }
    return (
        <>
            <main className="py-5">
                <div className="container">
                    <div className="row my-3 text-center">
                        <div className="col">
                            <Link to='/' className='btn btn-primary' >Go Home</Link>
                            <div className="text-center">
                                <hr className='w-100' />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                            <div className="card p-4" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                <h2 className="text-center my-3">Login Form</h2>
                                <div className="d-flex justify-content-center">
                                    <hr className='w-50' />
                                </div>
                                <div className="row">
                                    <Form layout='vertical'>
                                        <Form.Item label="Your Full Name">
                                            <Input className='w-100' onClick={handleChange} placeholder=' Your Full Name' name='name' onChange={(e) => { setUserName(e.target.value) }} />
                                        </Form.Item>
                                        <Form.Item label="Your Full Name">
                                            <Input className='w-100' onClick={handleChange} placeholder=' Your Email' name='email' onChange={(e) => { setEmail(e.target.value) }} />
                                        </Form.Item>
                                        <Form.Item label="Your Full Name">
                                            <Input.Password className='w-100' onClick={handleChange} placeholder=' Your Password' name='password' onChange={(e) => { setPassword(e.target.value) }} />
                                        </Form.Item>
                                        <Button type='primary' htmlType='submit' className='w-100' onClick={handleSubmit}>Login</Button>
                                    </Form>
                                </div>
                                <div className="row my-3 text-center">
                                    <div className="col">
                                        <p>Don't Havean account? <Link to='/auth/register'><b>Register here</b></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </>
    )
}