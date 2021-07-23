import React from 'react'
import Input from './Input'

const Form = () => {
    return (
        <>
        <Input type='text' label='Name' placeholder='Enter full name'/>
        <Input type='email' label='Email' placeholder='Enter email'/>
        <Input type='password' label='Create Password' placeholder='Enter password'/>
        <Input type='password' label='Re-enter Password' placeholder='Re-enter password'/>
        </>
    )
}

export default Form
