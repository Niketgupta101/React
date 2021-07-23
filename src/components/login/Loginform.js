import React from 'react'
import './login.css'

const Loginform = () => {
    return (
        <>
        <div className="input">
            <h4>Email</h4>
            <input type='email' className="form-control py-2 px-2" placeholder='Enter email' />
        </div>
        <div className="input">
            <h4>Create Password</h4>
            <input type='password' className="form-control py-2 px-2" placeholder='Enter password' />
        </div>
        <button className='btn btn-primary center'>Submit</button>
        </>
    )
}

export default Loginform
